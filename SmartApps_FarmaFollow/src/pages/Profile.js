import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";
import { Button, ListGroup, Accordion, Dropdown } from "react-bootstrap";

function Profile() {
  const { currentUser, logout } = useAuth();

  const [data, setData] = useState([]);
  const [logboek, setLogboek] = useState([]);

  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleLogout() {
    setError("");

    try {
      await logout();
    } catch {
      setError("Failed to log out");
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
        console.log("Document Data:", docSnap.data());
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
     

      

        <Accordion>
        <Accordion.Item eventKey="0">
            <Accordion.Header><h2>Gegevens</h2></Accordion.Header>
                <Accordion.Body>
                {data.map((el, index) => (
                <ListGroup key={index}>
                <ListGroup.Item><b>Email</b>: {el.Email}  </ListGroup.Item> 
                <ListGroup.Item><b>Naam</b>: {el.Naam} </ListGroup.Item>
                <ListGroup.Item><b>Familienaam</b>: {el.Familienaam} </ListGroup.Item>
                <ListGroup.Item><b>Naam kind</b>: {el.Kindnaam} </ListGroup.Item>
                <ListGroup.Item><b>Familienaam kind</b>: {el.Kindfnaam} </ListGroup.Item>
                <ListGroup.Item><b>Adres</b>: {el.Adres} </ListGroup.Item>
                <ListGroup.Item><b>Stad</b>: {el.Stad} </ListGroup.Item>
                <ListGroup.Item><b>Ingreep</b>: {el.Ingreep} </ListGroup.Item>
                <ListGroup.Item><b>Dokternaam</b>: {el.Dokternaam} </ListGroup.Item>
                <ListGroup.Item><b>Dokternummer</b>: {el.Dokternummer} </ListGroup.Item>
                <ListGroup.Item><b>Kliniek</b>: {el.Kliniek} </ListGroup.Item>
                </ListGroup>
            ))}
                </Accordion.Body>
                </Accordion.Item>
        </Accordion>
        {/* <p>Wijzig gegevens</p> */}
      <br />
      <h2>Logboek</h2>
      {logboek.map((el) => (
        <Accordion key={el.id}>
          <Accordion.Item eventKey="0">
            <Accordion.Header>{el.Datum}</Accordion.Header>
            <Accordion.Body>
              <b>Ik voelde mij</b> {el.Gevoel}
              <br /> <br />
              <b>Logboek</b>
              <br />
              {el.Logboek}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      ))}

      <Button variant="link" onClick={handleLogout}>
        Log Out
      </Button>
    </div>
  );
}

export default Profile;
