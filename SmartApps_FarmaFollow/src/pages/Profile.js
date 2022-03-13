import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";
import { Button, Accordion, ListGroup } from "react-bootstrap";

function Profile() {
  const { currentUser, logout } = useAuth();
  const [data, setData] = useState([]);
  const [logboek, setLogboek] = useState([]);

  const navigate = useNavigate();

  async function handleLogout() {
    

    try {
      await logout();
    } catch {
      alert("Uitloggen gefaald, gelieve uw browser te herladen of te verlaten");
    }
    navigate("/login");
    //check
  }

  useEffect(() => {
    const gegevens = [];
    const log = [];

    async function fetchGegevens() {
      const docRef = doc(db, "Users", currentUser.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        gegevens.push(docSnap.data());
      } else {
        console.log("no such document");
      }

      setData(gegevens);
    }

    async function fetchLogboek() {
      const querySnapshot = await getDocs(
        collection(db, "Users", currentUser.uid, "Logboek")
      );
      querySnapshot.forEach((doc) => {
        let data = doc.data();
        log.push({ id: doc.id, ...data });
      });

      setLogboek(log);
    }
    fetchGegevens();
    fetchLogboek();
  }, [currentUser.uid]);

    return (
    <div>
      <Button variant="link" onClick={handleLogout}>Uitloggen</Button>
              <h2>Profiel</h2>
              
              
                {data.map((el, index) => (
                <ListGroup key={index}>
                <ListGroup.Item><b>Email</b>: {el.Email}  </ListGroup.Item> 
                <ListGroup.Item><b>Naam ouder</b>: {el.Naam} {el.Familienaam} </ListGroup.Item>
                <ListGroup.Item><b>Naam kind</b>: {el.Kindnaam} {el.Familienaam} </ListGroup.Item>
                <ListGroup.Item><b>Ingreep</b>: {el.Ingreep} </ListGroup.Item>
                <ListGroup.Item><b>Kliniek</b>: {el.Kliniek} </ListGroup.Item>
                </ListGroup>
            ))}
        {/* <p>Wijzig gegevens</p> */}
      <br />

      {data.map((el, index) => (<h3 key={index}>Logboek van {el.Kindnaam}</h3>))}
      {logboek.map((el) => (
        <Accordion key={el.id}>
          <Accordion.Item eventKey="0">
            <Accordion.Header>{el.Datum}</Accordion.Header>
            <Accordion.Body>
              <b>Het kind had: </b> {el.Gevoel}
              <br /> <br />
              <b>Logboek</b>
              <br />
              {el.Logboek}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      ))}

      
    </div>
  );


}

export default Profile;
