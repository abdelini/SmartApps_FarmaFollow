import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import goed from "../../images/Goed.png";
import matig from "../../images/Matig.png";
import ernstig from "../../images/Ernstig.png";
import { Container } from "react-bootstrap";

const LogboekScherm = () => {
  //Get current date
  let currDate = new Date();
  currDate.setDate(currDate.getDate());
  let startDate = currDate.toDateString();

  //State variables
  const [date, setDate] = useState(startDate);
  const [entry, setEntry] = useState("");
  const [feeling, setFeeling] = useState(null);

  function saveEntry() {
    const test = {
      Datum: startDate,
      Gevoel: feeling,
      Logboek: entry

    }

    console.log(test.Datum)
    console.log(test.Gevoel)
    console.log(test.Logboek)

  }


  return (
    <div>
      <h3>{startDate}</h3>

      <p>Notities</p>

      <Form>
        <Container>
         
            <img alt="Smiley gezicht" src={goed} onClick={() => setFeeling("Goed")} />

            <img alt="Smiley gezicht" src={matig} onClick={() => setFeeling("Matig")} />

            <img alt="Smiley gezicht" src={ernstig} onClick={() => setFeeling("Ernstig")} />
          
        </Container>

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
