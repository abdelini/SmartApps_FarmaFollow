import React from "react";
import { Table } from "react-bootstrap";

function Medicatie() {


  return (
    <div>
      <h3>
        Medicatie voor Tonsillectomie (Keelamandelen) en/of Adenotomie
        (Neusamandelen){" "}
      </h3>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Groep A</th>
            <th>Pijnbestrijding paracetamol zoals dafalgan® en perdolan®</th>
            <th>Wanneer toedienen</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>5 – 10 kg</td>
            <td>Paracetamol suppo 100 mg</td>
            <td>Om de 4 tot 6 uur</td>
          </tr>
          <tr>
            <td>10 – 15 kg</td>
            <td>Paracetamol suppo 200 mg</td>
            <td>Om de 6 tot 8 uur</td>
          </tr>
          <tr>
            <td>16 – 20 kg</td>
            <td>Paracetamol suppo 200 mg</td>
            <td>Om de 4 tot 6 uur</td>
          </tr>
          <tr>
            <td>21 – 30 kg</td>
            <td>Paracetamol suppo 350 mg</td>
            <td>Om de 6 uur</td>
          </tr>
          <tr>
            <td>5 – 30 kg</td>
            <td>Paracetamol siroop volgens gewicht</td>
            <td>Om de 6 uur</td>
          </tr>
        </tbody>
      </Table>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Groep B</th>
            <th>
              Pijnstilling met ontstekingsremmende werking zoals nurofen® en
              perdophen®
            </th>
            <th>Wanneer toedienen</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>5 – 30 kg</td>
            <td>Ibuprofen siroop volgens gewicht</td>
            <td>Om de 8 uur</td>
          </tr>
        </tbody>
      </Table>

      <p>
        U mag medicatie uit groep <strong>A</strong> en <strong>B</strong>{" "}
        combineren. <strong>Maximaal 1 geneesmiddel </strong>uit elke groep.
      </p>
        <br />
        <br />
      <h3>Medicatie voor oordrains/trommelvliesbuisjes </h3>
      <p></p>
      <Table striped bordered hover size="sm" responsive >
        <thead>
          <tr>
            <th>Medicatie</th>
            <th>Hoeveelheid</th>
            <th>Wanneer toedienen</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Terracortril® oordruppels</td>
            <td>enkele druppels</td>
            <td>3x/dag gedurende 5 dagen</td>
          </tr>
          <tr>
            <td>Ciloxan® oordruppels</td>
            <td>4 druppels </td>
            <td>4x/dag <strong>indien oorloop</strong></td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Medicatie;
