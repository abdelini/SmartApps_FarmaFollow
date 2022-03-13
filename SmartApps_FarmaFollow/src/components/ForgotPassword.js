import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link } from "react-router-dom"
import logo from './logo.png';

export default function ForgotPassword() {
  const emailRef = useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setMessage("")
      setError("")
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage("Check uw email inbox voor verdere instructies")
    } catch {
      setError("Account niet gevonden! Heeft u het juiste email-adress ingevoerd?")
    }

    setLoading(false)
  }

  return (
    <>
        <img className="rounded mx-auto d-block" src={logo} alt="logo"></img>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Reset Paswoord
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/login">Ga terug naar Login</Link>
          </div>
    </>
  )
}
