import React from "react";
import ChatBot from "react-simple-chatbot";


const Chatbot = () => {


  const logica = [
    //Welkombericht
    {
      id: "hello-world",
      message: "Hallo! Waar kan ik je mee helpen?",
      trigger: "ingreep",
    },
  
    //Kiezen van de ingreep
    {
      id: "ingreep",
      options: [
        { value: 1, label: "Keelamandelen", trigger: "KeelInfo" },
        { value: 2, label: "Neusamandelen", trigger: "NeusInfo" },
        { value: 3, label: "Trommelvliesbuisjes", trigger: "TrommelInfo" },
      ],
    },
    //Info bericht, weergeeft vervolgens de opties gegeven in de overeenmkomende trigger
    {
      id: "KeelInfo",
      message: "Wat wil je hierover weten?",
      trigger: "Keel",
    },
    {
      id: "NeusInfo",
      message: "Wat wil je hierover weten?",
      trigger: "Neus",
    },
    {
      id: "TrommelInfo",
      message: "Wat wil je hierover weten?",
      trigger: "Trommel",
    },
  
    //Keel ingreep info
    {
      id: "Keel",
      options: [
        { value: 1, label: "Tips", trigger: "KeelTips" },
        { value: 2, label: "Medicatie", trigger: "KeelMeds" },
        { value: 3, label: "Mijn kind heeft veel pijn", trigger: "KeelPijn" },
      ],
    },
    {
      id: "KeelTips",
      component: (
        <div>
          <ul>
            <li>Koude drankjes en waterijsjes hebben een pijnstillend effect en vermindert de kans op nabloeding</li>
            <li>Drink regelamtig water en eet licht verteerbaar voedsel.</li>
            <li>Het is aangeraden de eerste 2 weken niet te gaan zwemmen (chloorwater kan het slijmvlies irriteren)</li>
          </ul>
        </div>
      ),
      trigger: 'MeerInfoKeel'
    },
    //Vragen of er nog info nodig is
    {
      id: 'MeerInfoKeel',
      message: "Wil je meer informatie over de keelamandelen?",
      trigger: 'Keuze'
    },
    {
      id:'Keuze',
      options: [
        { value: 1, label: "Ja", trigger: "Keel" },
        { value: 2, label: "Nee", trigger: "Einde" },
      ]
    },
    // {
    //   id:'NogIets',
    //   message: 'Kan ik nog ergens mee helpen?',
    //   trigger: 'AndereOpties'
    // },
    // //
    // {
    //   id:'AndereOpties',
    //   options: [
    //     { value: 1, label: "Ja", trigger: "ingreep" },
    //     { value: 2, label: "Nee", trigger: "Einde" },
    //   ]
    // },
    {
      id:'Einde',
      message: 'Veel beterschap!'
    },
    {
      id: "KeelMeds",
      component: (
        <a href="/medicatie">
          Klik hier om naar de medicatie pagina te gaan
        </a>
        )
    },
    {
      id: "KeelPijn",
      message: "In dit geval is het aangeraden om uw arts te contacteren",
    },
  
    //Neus ingreep info
    {
      id: "Neus",
      options: [
        { value: 1, label: "Tips", trigger: "NeusTips" },
        { value: 2, label: "Medicatie", trigger: "NeusMeds" },
        { value: 3, label: "Mijn kind heeft pijn", trigger: "NeusPijn" },
      ],
    },
    {
      id: "NeusTips",
      component: (
        <div>
          <ul>
            <li>Vermijd warm eten en drinken op de eerste dag. De eerste week mag uw kind niet sporten of zwemmen. </li>
            <li>De dag van de operatie mag het kind niet douchen of baden</li>
            <li>Wanneer uw kind aangeeft zich goed te voelen en pijnvrij is mag het weer naar school</li>
          </ul>
        </div>)
    },
    {
      id: "NeusMeds",
      component: (
        <a href="/medicatie">
          Klik hier om naar de medicatie pagina te gaan
        </a>
        )
    },
    {
      id: "NeusPijn",
      message: "In dit geval is het aangeraden om uw arts te contacteren",
    },
  
    //Trommel ingreep info
    {
      id: "Trommel",
      options: [
        { value: 1, label: "Tips", trigger: "TrommelTips" },
        { value: 2, label: "Medicatie", trigger: "TrommelMeds" },
        { value: 3, label: "Mijn kind heeft pijn", trigger: "TrommelPijn" },
      ],
    },
    {
      id: "TrommelTips",
      component: (
        <div>
          <ul>
            <li>Om de 6 maanden op controle</li>
            <li>Laat uw kind de eerste week na de operatie oordopjes dragen bij het zwemmen</li>
          </ul>
        </div>)
    },
    {
      id: "TrommelMeds",
      component: (
        <a href="/medicatie">
          Klik hier om naar de medicatie pagina te gaan
        </a>
        )
    },
    {
      id: "TrommelPijn",
      message: "In dit geval is het aangeraden om uw arts te contacteren",
    },
  ];


  return (
    <div>
      <ChatBot steps={logica} botDelay={500} userDelay={300}  floating={true} />
    </div>
  );
};

export default Chatbot;
