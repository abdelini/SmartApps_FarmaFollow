import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import { useAuth } from "../../contexts/AuthContext";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";
import Heelgoed from "../../images/Heelgoed.png";
import Goed from "../../images/Goed.png";
import Matig from "../../images/Matig.png";
import Slecht from "../../images/Slecht.png";
import Heelslecht from "../../images/Heelslecht.png";
import '../Logboek/LogboekScherm.css'
//import { Container } from "react-bootstrap";

const LogboekScherm = () => {
  //Get current date
  let currDate = new Date();
  currDate.setDate(currDate.getDate());
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  let startDate = currDate.toLocaleDateString('nl-be', options);
  

  // Get user from context
  const { currentUser } = useAuth();

  //State variables
  //const [date, setDate] = useState(startDate);
  const [loading, setLoading] = useState(false);
  const [entry, setEntry] = useState("");
  const [feeling, setFeeling] = useState(null);

  const [validated, setValidated] = useState(false);


  // Form submit
  async function handleSubmit(e) {
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      e.preventDefault();

      try {
        setLoading(true);
        await saveEntry();
        alert("Logboek opgeladen!");
      } catch (error) {
        console.log(error);
      }
    }

    setValidated(true);
    setLoading(false);
  }

  // Sla logboek entry op
  async function saveEntry() {
    try {
      const docRef = await addDoc(
        collection(db, "Users", currentUser.uid, "Logboek"),
        {
          Datum: startDate,
          Gevoel: feeling,
          Logboek: entry,
        }
      );
      console.log("Document written with ID: ", docRef.id);
    } catch (err) {
      console.error("Error adding document", err);
    }
  }

  return (
    <div>
      
      <h3>{startDate}</h3>

      

      <p>Klik op een emoji om aan te duiden hoe het kind zich voelt</p>
      
      <br></br>


      <Form noValidate validated={validated} onSubmit={handleSubmit}>
      
        <input onChange={() => {setFeeling("Geen pijn")}} type="radio" name="emotion" id="heelgoed" class="input-hidden" />
        <label class="label_item" for="heelgoed">
          <img src={Heelgoed} alt="Ik voel me heel goed" />
          <p>Geen pijn </p>
        </label>
        

        <input onChange={() => {setFeeling("Weinige pijn")}} type="radio" name="emotion" id="goed" class="input-hidden" />
        <label class="label_item" for="goed">
          <img src={Goed} alt="Ik voel me goed" />
          <p> Weinige pijn </p>
        </label>
        

        <input onChange={() => {setFeeling("Matige pijn")}} type="radio" name="emotion" id="matig" class="input-hidden" />
        <label class="label_item" for="matig">
          <img src={Matig} alt="Ik voel me matig" />
          <p>Matige pijn</p>
        </label>
        

        <input onChange={() => {setFeeling("Hevige pijn")}} type="radio" name="emotion" id="slecht" class="input-hidden" />
        <label class="label_item" for="slecht">
          <img src={Slecht} alt="Ik voel me slecht" />
          <p>Hevige pijn</p>
        </label>
        

        <input onChange={() => {setFeeling("Zeer hevige pijn")}} type="radio" name="emotion" id="heelslecht" class="input-hidden" />
        <label class="label_item" for="heelslecht">
          <img src={Heelslecht} alt="Ik voel me heel slecht" />
          <p>Zeer hevige pijn</p>
        </label>
        

        <h3>Notities</h3>

        <InputGroup size="sm">
          <FormControl
            required
            value={entry}
            onChange={(e) => setEntry(e.target.value)}
            as="textarea"
            rows={6}
            aria-label="With textarea"
          />
          <Form.Control.Feedback type="invalid">
            Gelieve uw notities aan te vullen
          </Form.Control.Feedback>
        </InputGroup>

        <Button type="submit" disabled={loading}>
          Voeg toe aan logboek
        </Button>
      </Form>
      <br></br>
      <br></br>
      <p>De logboekverslagen worden opgeslagen bij uw profiel.</p>

      
    </div>
  );
};

export default LogboekScherm;
