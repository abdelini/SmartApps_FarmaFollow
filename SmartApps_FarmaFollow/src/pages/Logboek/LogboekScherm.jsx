import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import { doc, setDoc, collection, addDoc } from "firebase/firestore"; 
import { db } from "../../firebase";
import goed from "../../images/Goed.png";
import matig from "../../images/Matig.png";
import ernstig from "../../images/Ernstig.png";
//import { Container } from "react-bootstrap";

const LogboekScherm = () => {
  //Get current date
  let currDate = new Date();
  currDate.setDate(currDate.getDate());
  let startDate = currDate.toDateString();

  //State variables
  const [date, setDate] = useState(startDate);
  const [entry, setEntry] = useState("");
  const [feeling, setFeeling] = useState(null);

  const [radioValue, setRadioValue] = useState('2');

  const radios = [
    { name: 'goed', value: '1' },
    { name: 'matig', value: '2' },
    { name: 'ernstig', value: '3' },
  ];


  async function saveEntry() {

    try {
      const docRef = await addDoc(collection(db, "Logboek"), {
        Datum: startDate,
        Gevoel: feeling,
        Logboek: entry
      });
      console.log("Document written with ID: ", docRef.id);
    }
    catch (err) {
      console.error("Error adding document", err)
    }
  }

  // useEffect(() => {
  //   console.log(feeling)
  // })

  function checkOnchange() {

  }

  return (
    <div>
      <h3>{startDate}</h3>

      <p>Notities</p>

      <Form>
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
              console.log("Im changing!")
              setRadioValue(e.currentTarget.value)
              setFeeling(radio.name)}}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
       

        <InputGroup  size="sm">
          <FormControl value={entry} onChange={e => setEntry(e.target.value)} as="textarea" rows={6} aria-label="With textarea" />
        </InputGroup>

        <Form.Group controlId="formFileSm" className="mb-3">
          <Form.Label>Optioneel: Voeg een foto toe</Form.Label>
          <Form.Control type="file" size="sm" />
        </Form.Group>
      </Form>

      <Button onClick={() => saveEntry()}>Voeg toe aan logboek</Button>
    </div>
  );
};

export default LogboekScherm;
