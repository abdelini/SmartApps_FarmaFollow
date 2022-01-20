import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Card from "./components/Cards";
import Child from "./pages/Child";
import Profile from "./pages/Profile";
import BottomNavbar from "./components/BottomNavbar";
import Logboek from "./pages/Logboek/LogboekScherm";
import ChatBot from "./pages/Chatbot/ChatBot";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import Signup from "./components/signup/Signup";
import Medicatie from "./pages/Medicatie"

function App() {
  return (
    <>
      <Navbar />
      
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
      </Routes>

      
      {/* <BottomNavbar /> */}
      <ChatBot />
    </>
  );
}

export default App;
