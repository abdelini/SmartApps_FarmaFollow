
import { Container, Typography, Grid, TextField, Button } from '@material-ui/core'
import React from "react"
import kindjes from './img/kindjes.jpg';

const PersonalDetails = ({ prevStap, nextStap, handleChange, values }) => {
  
  const Continue = e => {
    e.preventDefault();

      //testen van gegevens
  if (values.kindnaam === "") {
    alert("kind naam is onjuist");
  }
  if (values.kindfnaam === "") {
    alert("familie naam is onjuist");
  }  
  if (values.ingreep === "") {
    alert("ingreep onjuist");
    return;
  }   
    nextStap();
  }

  const Previous = e => {
    e.preventDefault();
    prevStap();
  }

  return (
    
    
    <Container  component="main" maxWidth="xs">
      <img className="rounded mx-auto d-block" src={kindjes} alt="logo"></img>
      <div>
        <Typography  component="h1" variant="h5">
          Sign up
        </Typography>
        <form>
          <Grid container spacing={2}>
          {/* kindnaam, kindfnaam, ingreep */}
            {/* kindnaam */}
            <Grid item xs={12} sm={6}>
              <TextField 
                placeholder="kindnaam"
                label="kindnaam"
                onChange={handleChange('kindnaam')}
                defaultValue={values.kindnaam}
                fullWidth
              />
            </Grid>
            {/* kindfnaam */}
            <Grid item xs={12} sm={6}>
              <TextField 
                placeholder="kindfnaam"
                label="kindfnaam"
                onChange={handleChange('kindfnaam')}
                defaultValue={values.kindfnaam}
                fullWidth
              />
            </Grid>

            {/* ingreep */}
            <Grid item xs={12}>
              <TextField 
                placeholder="ingreep"
                label="ingreep"
                onChange={handleChange('ingreep')}
                defaultValue={values.ingreep}
                autoComplete="ingreep"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button 
                onClick={ Previous }
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Vorige
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
                Volgende
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
   
  )
}

export default PersonalDetails

