import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Card from './components/Cards';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/'/>
        </Routes>
        <Card/>
      </Router>

      
    </>
  );
}

export default App;
