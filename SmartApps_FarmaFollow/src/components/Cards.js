import React from 'react'
import { Card, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Cards.css'
import LogboekImage from "../images/logboek.jpg"
import MedicatieImage from "../images/Meds.jpg"
import TipsImage from "../images/Tip.png"
import Logboek from "../pages/Logboek/LogboekScherm"
import { useNavigate } from "react-router-dom";

function Cards() {
    let navigate = useNavigate();

    function goToLogboek() {
            navigate("/logboek")
    }

    function goToMedicatie() {
        navigate("/medicatie")
}


function clickLogboek() {
    navigate("/logboek")
}

    return (
        <div className='cards-container'>
            <Card style={{ width: '20rem', height: '25rem' }}>
                <Card.Body>
                <Card.Img variant="top" src={LogboekImage} />
                    <Card.Title>Logboek</Card.Title>
                    <Card.Text className='cards-text'>
                    Hou de gezondheid van je kind bij.
                    </Card.Text>
                    <Button onClick={goToLogboek} variant="primary">Logboek
                    </Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '20rem', height: '25rem' }}>
                <Card.Body>
                <Card.Img variant="top" src={MedicatieImage} />
                    <Card.Title>Medicatie</Card.Title>
                    <Card.Text className='cards-text'>
                    Wat moet je kind nemen op welk moment?
                    </Card.Text>
                    <Button onClick={goToMedicatie} variant="primary">Medicatie</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '20rem', height: '25rem' }}>
                <Card.Body>
                <Card.Img variant="top" src={TipsImage} />
                    <Card.Title>Tips</Card.Title>
                    <Card.Text className='cards-text'>
                    Enkele tips om uw kind te helpen
                    </Card.Text>
                    <Button variant="primary">Tips</Button>
                </Card.Body>
            </Card>

            

        
           
        </div>
        
    )
}

export default Cards
