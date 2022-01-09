
import { Container, Typography, Grid, TextField, Button } from '@material-ui/core'
import React from "react"
import { Card } from "react-bootstrap"
import happy from './img/happy.jpg';

const PersonalDetails = ({ prevStap, nextStap, handleChange, values }) => {
  
  const Continue = e => {
    e.preventDefault();

  if (values.dokternaam === "") {
    alert("dokternaam onjuist");
  }
  if (values.dokternummer === "") {
    alert("dokternummer onjuist");
  }  
  if (values.kliniek === "") {
    alert("kliniek onjuist");
  }   
  if (values.adres === "") {
    alert("adres onjuist");
  }   
  if (values.stad === "") {
    alert("stad onjuist");
    return;
  } 
    nextStap();
  }
  const Previous = e => {
    e.preventDefault();
    prevStap();
  }

  return (
    <Card>

    <Card.Body>
    <img className="rounded mx-auto d-block" src={happy} alt="logo"></img>

    <Container component="main" maxWidth="xs">
      <div>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>

        <form>
          <Grid container spacing={2}>
            {/* dokternaam */}
            <Grid item xs={12}>
              <TextField 
                placeholder="dokternaam"
                label="dokternaam"
                onChange={handleChange('dokternaam')}
                defaultValue={values.dokternaam}
                autoComplete="dokternaam"
                fullWidth
              />
            </Grid>
            {/* dokternummer */}
            <Grid item xs={12}>
              <TextField 
                placeholder="dokternummer"
                label="dokternummer"
                onChange={handleChange('dokternummer')}
                defaultValue={values.dokternummer}
                autoComplete="dokternummer"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField 
                placeholder="kliniek"
                label="kliniek"
                onChange={handleChange('kliniek')}
                defaultValue={values.kliniek}
                autoComplete="kliniek"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField 
                placeholder="adres"
                label="adres"
                onChange={handleChange('adres')}
                defaultValue={values.adres}
                autoComplete="adres"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField 
                placeholder="stad"
                label="stad"
                onChange={handleChange('stad')}
                defaultValue={values.stad}
                autoComplete="stad"
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
                vorige
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
                Next
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
    </Card.Body>
    </Card>
  )
}

export default PersonalDetails

