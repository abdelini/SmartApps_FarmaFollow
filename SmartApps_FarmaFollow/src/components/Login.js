import React, { useRef, useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import logo from "./logo.png";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    const form = e.currentTarget;

    if (form.checkValidity() === false) {

      e.preventDefault();
      e.stopPropagation();

    } else {

      e.preventDefault();
      setError("");
      
      try {
        setLoading(true);
        await login(emailRef.current.value, passwordRef.current.value);
        navigate("/home");
      } catch (error) {
        //Custom error berichten voor gebruikersvriendelijkheid
        switch (error.code) {
          case "auth/user-not-found":
            setError("Gebruiker niet gevonden");
            form.reset();
            break;
          case "auth/invalid-email":
            setError("Verkeerd email");
            break;
          case "auth/wrong-password":
            setError("Verkeerd paswoord");
            break;
          default:
            break;
        }
      }
    }

    setValidated(true);
    setLoading(false);
  }

  return (
    <>
      <img className="rounded mx-auto d-block" src={logo} alt="logo"></img>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group id="email">
          <Form.Label>Email</Form.Label>
          <Form.Control required type="email" ref={emailRef} />
          <Form.Control.Feedback type="invalid">
            Gelieve uw email adres in te vullen!
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group id="password">
          <Form.Label>Password</Form.Label>
          <Form.Control required type="password" ref={passwordRef} />
          <Form.Control.Feedback type="invalid">
            Gelieve uw wachtwoord in te vullen!
          </Form.Control.Feedback>
        </Form.Group>
        <Button disabled={loading} className="w-100" type="submit">
          Log In
        </Button>
      </Form>
      <div className="w-100 text-center mt-3">
        <Link to="/forgot-password">Forgot Password?</Link>
      </div>

      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup/Signup">Sign Up</Link>
      </div>
    </>
  );
}
