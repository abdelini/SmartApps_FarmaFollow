import React, { Component } from 'react'
import UserDetails from './UserDetails'
import PersonalDetails from './PersonalDetails'
import Confirmation from './Confirmation'
import DokterGegevens from './DokterGegevens.js'
import Login from '../Login'



export default class Signup extends Component {


  state = {
    stap: 1,
    email: '',
    naam: '', 
    fnaam: '', 
    wachtwoord: '',
    kindnaam: '',
    kindfnaam: '',
    ingreep: '',
    dokternaam: '',
    //dokternummer: '', 
    kliniek: '', 
    //adres: '', 
    stad: '', 
  }

  // go back to previous stap
  prevStap = () => {
    const { stap } = this.state;
    this.setState({ stap: stap - 1 });
  }

  // proceed to the next stap
  nextStap = () => {
    const { stap } = this.state;
    this.setState({ stap: stap + 1 });
  }

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  }



 

  render() {
    const { stap } = this.state;
    const { email, naam, fnaam, wachtwoord, kindnaam, kindfnaam, ingreep, dokternaam, kliniek, stad } = this.state;
    const values = { email, naam, fnaam, wachtwoord, kindnaam, kindfnaam, ingreep, dokternaam, kliniek, stad }
    
    switch(stap) {
      case 1: 
        return (
          <UserDetails 
            nextStap={ this.nextStap }
            handleChange={ this.handleChange }
            values={ values }
          />
        )
      case 2: 
        return (
          <PersonalDetails 
            prevStap={ this.prevStap }
            nextStap={ this.nextStap }
            handleChange={ this.handleChange }
            values={ values }
          />
        )
      case 3: 
          return (
            <DokterGegevens 
            prevStap={ this.prevStap }
            nextStap={ this.nextStap }
            handleChange={ this.handleChange }
            values={ values }
          />
          )
        case 4: 
        return (
          <Confirmation 
            prevStap={ this.prevStap }
            values={ values }
          />
        )
            
      default: 
      return (
        <Login 
        />
      )
    }
  }
}
