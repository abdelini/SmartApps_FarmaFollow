import React, { useState } from "react";
import { Container, Grid, Button } from "@material-ui/core";
import good from "./img/good.gif";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { db, auth } from "../../firebase";

const Confirmation = ({ prevStap, values }) => {
  const { signup } = useAuth();
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  async function Continue(e) {
    e.preventDefault();

    try {
      setLoading(true);
      await signup(values.email, values.wachtwoord);
      await saveInfo();
      navigate("/");
    } catch {
      //Error ghandling
    }
    setLoading(false);
    
  }

  async function saveInfo() {
    try {
      await setDoc(
        doc(db, "Users", auth.currentUser.uid),
        {
          Naam: values.naam,
          Familienaam: values.fnaam,
          Kindnaam: values.kindnaam,
          Kindfnaam: values.kindfnaam,
          Ingreep: values.ingreep,
          Dokternaam: values.dokternaam,
          Dokternummer: values.dokternummer,
          Kliniek: values.kliniek,
          Adres: values.adres,
          Stad: values.stad,
        },
        { merge: true }
      );
      console.log("Document written");
    } catch (err) {
      console.error("Document id not found", err);
    }
  }

  const Previous = (e) => {
    e.preventDefault();
    prevStap();
  };

  return (
        <Container component="main" maxWidth="xs">
          <div>
            <h1>Goed gedaan, veel beterschap!</h1>
            <img
              className="rounded mx-auto d-block"
              src={good}
              alt="logo"
            ></img>
            <br />
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Button
                  onClick={Previous}
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                >
                  Previous
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  onClick={Continue}
                  disabled={loading}
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                >
                  bevestig & Ga door
                </Button>
              </Grid>
            </Grid>
          </div>
        </Container>

  );
};

export default Confirmation;
