import React from 'react';
import { Container, Navbar, Nav } from "react-bootstrap";



const Navigation = () => {



    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="/home">FarmaFollow</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link href="/profile">Profiel</Nav.Link>
                            <Nav.Link href="/logboek">Logboek</Nav.Link>
                            <Nav.Link href="/medicatie">Medicatie</Nav.Link>
                            <Nav.Link href="/tips">Tips</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}

export default Navigation