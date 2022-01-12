
import { Container, Typography, Grid, TextField, Button } from '@material-ui/core'
import React from "react"
import { Card } from "react-bootstrap"
import ouders from './img/ouders.jpg';



const UserDetails = ({ nextStap, handleChange, values }) => {
  
  // for continue event listener
  const Continue = e => {
    e.preventDefault();

  //testen van gegevens
  if (values.email === "") {
    alert("email onjuist");
  }
  if (values.naam === "") {
    alert("naam onjuist");
  }  
  if (values.fnaam === "") {
    alert("familie naam onjuist");
  }   
  if (values.wachtwoord === "") {
    alert("wachtwoord mag niet leeg zijn");
    return;
  } 
    nextStap();
    
  }

  return (
    
    
    

    <Container  component="main" maxWidth="xs">
      <img className="rounded mx-auto d-block" src={ouders} alt="logo"></img>
      <div>
        <Typography  component="h1" variant="h5">
          Sign up
        </Typography>
        <form>
          <Grid container spacing={2}>
              {/* email address */}
              <Grid item xs={12}>
                <TextField 
                  placeholder="Email Address"
                  label="Email Address"
                  onChange={handleChange('email')}
                  defaultValue={values.email}
                  autoComplete="email"
                  fullWidth
                />
              </Grid>
              <br />
              {/* naam */}
              <Grid item xs={12}>
                <TextField 
                  placeholder="naam"
                  label="naam"
                  onChange={handleChange('naam')}
                  defaultValue={values.naam}
                  autoComplete="naam"
                  fullWidth
                />
              </Grid>
              <br />
              {/* fnaam */}
              <Grid item xs={12}>
                <TextField 
                  placeholder="achternaam"
                  label="familie naam"
                  onChange={handleChange('fnaam')}
                  defaultValue={values.fnaam}
                  autoComplete="fnaam"
                  type="required"
                  fullWidth
                />
              </Grid>
              <br />
              {/* wachtwoord */}
              <Grid item xs={12}>
                <TextField 
                  placeholder="wachtwoord"
                  label="wachtwoord"
                  onChange={handleChange('wachtwoord')}
                  defaultValue={values.wachtwoord}
                  autoComplete="wachtwoord"
                  fullWidth
                  type="password"
                />
              </Grid>
          </Grid>
          <br />
          <Button 
            onClick={ Continue }
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Next
          </Button>
        </form>
      </div>
    </Container>

    
        
  )
}

export default UserDetails
