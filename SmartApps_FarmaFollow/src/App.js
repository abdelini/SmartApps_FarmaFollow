import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Card from "./components/Cards";
import Child from "./pages/Child";
import Profile from "./pages/Profile";
import Logboek from "./pages/Logboek/LogboekScherm";
import ChatBot from "./pages/Chatbot/ChatBot";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import Signup from "./components/signup/Signup";
import Tips from "./pages/Tips";
import Medicatie from "./pages/Medicatie"
import Navigation from "./pages/Navbar";
import ForgotPassword from "./components/ForgotPassword"


function App() {
  return (
    <>

<Navigation />
      <Routes>
        
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Card />
            </PrivateRoute>
          }
        />
        <Route path="/home" element={<Card />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/child" element={<Child />} />
        <Route path="/logboek" element={<Logboek />} />
        <Route path="/chatbot" element={<ChatBot />} />
        <Route path="/signup/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/medicatie" element={<Medicatie />} />
        <Route path="/tips" element={<Tips />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>

      <ChatBot />
    </>
  );
}

export default App;
