import React, {useState} from 'react'
import { Container, Grid, Button } from '@material-ui/core'
import { Card } from "react-bootstrap"
import good from './img/good.gif'
import { useAuth } from "../../contexts/AuthContext"
import { useNavigate } from "react-router-dom"


 const Confirmation =  ({ prevStap, nextStap, values }) => {
  const { signup } = useAuth()
  const [loading, setLoading] = useState(false)
  let navigate = useNavigate();

  //console.log(values);

  async function Continue(e)  {
    e.preventDefault();

    try {
      
      setLoading(true)
      await signup(values.email, values.wachtwoord)
      console.log("hey")
      
    } catch {
      //setError("Failed to log in")
    }

    setLoading(false)
    navigate("/")
    

  }

 
  const Previous = e => {
    e.preventDefault();
    prevStap();
  }

  return (
    <Card>
    <Card.Body>
    <Container component="main" maxWidth="xs">
      <div>
        <h1>Goed gedaan, veel beterschap!</h1>
        <img className="rounded mx-auto d-block" src={good} alt="logo"></img>
        <br/>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Button 
              onClick={ Previous }
              type="submit"
              fullWidth
              variant="contained"
              color="primary">
              Previous
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button 
              onClick={ Continue }
              disabled={ loading }
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
    </Card.Body>
    </Card>
  )
}

export default Confirmation
