import React from 'react'
import { Container, Grid, Button } from '@material-ui/core'
import { Card } from "react-bootstrap"
import good from './img/good.gif'


 const Confirmation =  ({ prevStap, nextStap, values }) => {
  console.log(values);

  const Continue =  e => {
    e.preventDefault();
    nextStap();
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
