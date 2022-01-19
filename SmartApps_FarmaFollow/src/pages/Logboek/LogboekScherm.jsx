import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import { useAuth } from "../../contexts/AuthContext";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";
// import goed from "../../images/Goed.png";
// import matig from "../../images/Matig.png";
// import ernstig from "../../images/Ernstig.png";
//import { Container } from "react-bootstrap";

const LogboekScherm = () => {
  //Get current date
  let currDate = new Date();
  currDate.setDate(currDate.getDate());
  let startDate = currDate.toDateString();

  // Get user from context
  const { currentUser } = useAuth();

  //State variables
  //const [date, setDate] = useState(startDate);
  const [loading, setLoading] = useState(false);
  const [entry, setEntry] = useState("");
  const [feeling, setFeeling] = useState(null);

  const [radioValue, setRadioValue] = useState("");
  const [validated, setValidated] = useState(false);

  const radios = [
    { name: "goed", value: "1" },
    { name: "matig", value: "2" },
    { name: "ernstig", value: "3" },
  ];


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

      <p>Notities</p>

      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <ButtonGroup className="mb-2">
          {radios.map((radio, idx) => (
            <ToggleButton
              key={idx}
              id={`radio-${idx}`}
              type="radio"
              variant="secondary"
              name="radio"
              value={radio.value}
              checked={radioValue === radio.value}
              onChange={(e) => {
                console.log("Im changing!");
                setRadioValue(e.currentTarget.value);
                setFeeling(radio.name);
              }}
            >
              {radio.name}
            </ToggleButton>
          ))}
        </ButtonGroup>

        {/* <Form.Check inline type="radio" label="1" />
        <Form.Check inline type="radio" label="2" />
        <Form.Check inline type="radio" label="3" /> */}

        {/* {["radio"].map((type) => (
          <div key={`inline-${type}`} className="mb-3">
           
            <Form.Check
              inline
              label="1"
              name="group1"
              type={type}
              id={`inline-${type}-1`}
            />
            <Form.Check
              inline
              label="2"
              name="group1"
              type={type}
              id={`inline-${type}-2`}
            />
            <Form.Check
              inline
              label="3"
              type={type}
              id={`inline-${type}-3`}
            />
          </div>
        ))} */}

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

        {/* <Form.Group controlId="formFileSm" className="mb-3">
          <Form.Label>Optioneel: Voeg een foto toe</Form.Label>
          <Form.Control type="file" size="sm" />
        </Form.Group> */}

        <Button type="submit" disabled={loading}>
          Voeg toe aan logboek
        </Button>
      </Form>
    </div>
  );
};

export default LogboekScherm;
