import React from "react";
import { Accordion } from "react-bootstrap";


const Tips = () => {

    return (
        <div>
            <h1>Tips en adviezen</h1>
            <p>Op deze pagina kan u aantal nuttige tips en adviezen bevinden rond het herstelproces van uw kind. <br></br>
                Klik op een van de volgende behandelingen om de tips te zien
            </p>
            <Accordion>

                <Accordion.Item eventKey="0">
                    <Accordion.Header>Keelamandelen </Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            <li>Koude drankjes en waterijsjes hebben een pijnstillend effect en vermindert de kans op nabloeding (de bloedvaatjes trekken samen) </li>
                            <li>Regelmatig een slokje water drinken  </li>
                            <li>De eerste twee weken best niet gaan zwemmen, chloorwater kan het slijmvlies irriteren </li>
                            <li>Licht verteerbaar voedsel en met kleine slokjes drinken vermindert misselijkheid </li>
                            <li>Bruisende dranken en hard voedsel kan pijn veroorzaken, we adviseren dit de eerste week na de ingreep te vermijden </li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                    <Accordion.Header>Neusamandelen </Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            <li>Vermijd de eerste dag warm eten en drinken </li>
                            <li>Als uw kind gaat baden of douchen, zorg ervoor dat het water niet te warm is, dit kan het risico op nabloeding vergroten </li>
                            <li>Zorg ervoor dat uw kind zo min mogelijk gaat zuigen, zuigen kan namelijk een nabloeding bevorderen door de zuigkracht die op de wond komt te staan  </li>
                            <li>Wanneer uw kind aangeeft zich goed te voelen en pijnvrij is mag het weer naar school</li>
                            <li>De eerste week mag uw kind niet sporten of zwemmen. </li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                    <Accordion.Header>Trommelvliesbuisjes </Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            <li>Om de zes maanden op controle </li>
                            <li>Laat uw kind de eerste week na de operatie oordopjes dragen bij het zwemmen </li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>


            </Accordion>

        </div>

    )




}


export default Tips