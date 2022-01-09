import React from 'react'
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Cards.css'
//import { useNavigate } from "react-router-dom";

function Cards() {
    //let navigate = useNavigate();
    return (
        <div className='cards-container'>
            <Card style={{ width: '10rem', height: '10rem' }}>
                <Card.Body>
                    <Card.Title>Logboek</Card.Title>
                    <Card.Text className='cards-text'>
                    Hou de gezondheid van je kind bij.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '10rem', height: '10rem' }}>
                <Card.Body>
                    <Card.Title>Medicatie</Card.Title>
                    <Card.Text className='cards-text'>
                    Wat moet je kind nemen op welk moment?
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '10rem', height: '10rem' }}>
                <Card.Body>
                    <Card.Title>Foto's</Card.Title>
                    <Card.Text className='cards-text'>
                    Een tijdlijn met alle foto's van jouw kind gedurende de herstelperiode.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '10rem', height: '10rem' }}>
                <Card.Body>
                    <Card.Title>Tips</Card.Title>
                    <Card.Text className='cards-text'>
                    Zie wat goed is voor uw genezende kind en wat niet.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
        
    )
}

export default Cards
