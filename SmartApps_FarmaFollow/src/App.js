import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Card from './components/Cards';
import Home from './pages/Home'
import Child from './pages/Child'
import Profile from './pages/Profile'
import BottomNavbar from './components/BottomNavbar';
import Logboek from './pages/Logboek/LogboekScherm';
import Chatbot from './pages/Chatbot/ChatBot';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/home' component={Home}/>
          <Route path='/profile' component={Profile}/>
          <Route path='/child' component={Child}/>
          <Route path='/logboek' component={Logboek}/>
          <Route path='/chatbot' component={Chatbot}/>
        </Routes>
        <Card/>
        <BottomNavbar/>
        <Chatbot />
      </Router>
    </>
  );
}

export default App;
