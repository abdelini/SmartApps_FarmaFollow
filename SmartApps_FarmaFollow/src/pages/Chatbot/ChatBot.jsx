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
        { value: 2, label: "Neusamandel", trigger: "NeusInfo" },
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
        { value: 3, label: "Mijn kind heeft ongemak", trigger: "KeelPijn" },
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
      message: 'Veel beterschap! U kan de chat sluiten. Als u terug hulp nodig heeft kan u hieronder een nieuwe optie aanduiden.',
      trigger: "OpnieuwHulp"
    },
    {
      id: "OpnieuwHulp",
      options: [
        { value: 1, label: "Keelamandelen", trigger: "KeelInfo" },
        { value: 2, label: "Neusamandel", trigger: "NeusInfo" },
        { value: 3, label: "Trommelvliesbuisjes", trigger: "TrommelInfo" },
      ],
    },
    {
      id: "KeelMeds",
      component: (
        <a href="/medicatie">
          Klik hier om naar de medicatie pagina te gaan
        </a>
        ),
      trigger: 'MeerInfoKeel'
    },
    {
      id: "KeelPijn",
      message: "Wat voor ongemak heeft uw kind?",
      trigger: "WatKeelPijn"
    },
    {
      id: "WatKeelPijn",
      options: [
        { value: 1, label: "Keel- en oorpijn", trigger: "KOpijn" },
        { value: 2, label: "Misselijkheid", trigger: "Misselijkheid" },
        { value: 3, label: "Koorts", trigger: "KeelKoorts" },
      ]
    },
    {
      id:'KOpijn',
      message: 'Deze pijn is te wijten aan de ingreep en hoort bij het herstel van de wonde.',
      trigger: 'KOpijn2'
    },
    {
      id:'KOpijn2',
      message: 'We raden u aan om het medicatieschema de eerste 3 dagen na de ingreep consequent te volgen. Hierdoor blijft de pijn onder controle',
      trigger: 'MeerNeusInfo'
    },
    {
      id:'MeerNeusInfo',
      message: 'Kan ik nog ergens mee helpen?',
      trigger: 'MeerInfoKeel'
    },

    
    {
      id:'Misselijkheid',
      message: 'Na de ingreep kan uw kind donker bloed braken. Dit is bloed dat tijdens de operatie in de maag is gekomen. Hierover hoeft u zich geen zorgen te maken. ',
      trigger: 'MeerNeusInfo'
      
    },
    {
      id:'KeelKoorts',
      message: 'Frequent hebben kinderen na de ingreep wat verhoging van de temperatuursverhoging (tot 38°C). Dit is normaal en de temperatuur zakt na het geven van Paracetamol®.',
      trigger: 'MeerNeusInfo'
    },
  
  
    //Neus ingreep info
    {
      id: "Neus",
      options: [
        { value: 1, label: "Tips", trigger: "NeusTips" },
        { value: 2, label: "Medicatie", trigger: "NeusMeds" },
        { value: 3, label: "Mijn kind heeft ongemak", trigger: "NeusPijn" },
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
      message: "Wat voor ongemak heeft uw kind?",
      trigger: "WatNeusPijn"
    },
    {
      id: "WatNeusPijn",
      options: [
        { value: 1, label: "Bloed", trigger: "Bloedingen" },
        { value: 2, label: "Koorts", trigger: "NeusKoorts" },
        { value: 3, label: "Veel pijn", trigger: "VeelNeusPijn" },
      ]
    },
    {
      id:'Bloedingen',
      message: 'Indien het bloed een bruine kleur heeft hoeft u zich geen zorgen te maken, dit betekent dat het oud bloed is.',
      trigger: 'Bloedingen2'
    },
    {
      id:'Bloedingen2',
      message: 'Indien het bloed rood is dient u contact op te nemen met de arts.',
      trigger: 'NogNeusHelp'
    },
    {
      id:'NogNeusHelp',
      message: 'Kan ik nog ergens mee helpen?',
      trigger: 'Keuze'
    },
    {
      id:'NeusKoorts',
      message: 'Volg het medicatieschema indien uw kind koorts heeft. Als uw kind na 3 dagen nog koorts heeft, gelieve dan contact op te nemen met een arts',
      trigger: 'NogNeusHelp'
    },
    {
      id:'VeelNeusPijn',
      message: 'Als uw kind nog steeds veel pijn heeft, zelfs met het geven van pijnstillers, neemt u best contact op met een arts',
      trigger: 'NogNeusHelp'
    },
    {
      id:'Keuze',
      options: [
        { value: 1, label: "Ja", trigger: "Neus" },
        { value: 2, label: "Nee", trigger: "Einde" },
      ]
    },

  
    //Trommel ingreep info
    {
      id: "Trommel",
      options: [
        { value: 1, label: "Tips", trigger: "TrommelTips" },
        { value: 2, label: "Medicatie", trigger: "TrommelMeds" },
        { value: 3, label: "Mijn kind heeft ongemak", trigger: "TrommelPijn" },
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
        </div>),
        trigger: "ExtraHulp"
    },
    {
      id: "TrommelMeds",
      component: (
        <a href="/medicatie">
          Klik hier om naar de medicatie pagina te gaan
        </a>
        ),
      trigger: "ExtraHulp"
    },
    {
      id: "TrommelPijn",
      message: "Wat voor ongemak heeft uw kind?",
      trigger: 'WatTrommelPijn'
    },
    {
      id: "WatTrommelPijn",
      options: [
        { value: 1, label: "Vocht uit het oor", trigger: "OorVocht" },
        { value: 2, label: "Gevoel van druk in oor", trigger: "OorDruk" },
        { value: 3, label: "Koorts", trigger: "TrommelKoorts" },
      ]
    },
    {
      id: "OorVocht",
      message: "Oorvocht verdwijnt meestal spontaan na enkele dagen tot een week",
      trigger: "OorVocht2"
    },
    {
      id: "OorVocht2",
      message: "Indien er na zeven dagen nog altijd vocht uit het oor komt is het raadzaam om de huisarts te contacteren.",
      trigger: "ExtraHulp"
    },
    {
      id: "OorDruk",
      message: "Het gevoel van druk in een oor is mogelijk. Dit kan eveneens pijn veroorzaken maar dit zal weggaan. Indien dit probleem zich blijft aanslepen, contacteert u best een arts",
      trigger: "ExtraHulp"
    },
    {
      id: "TrommelKoorts",
      message: "Geef het kind medicatie volgens schema. Indien de koorts 3 opeenvolgende dagen aanhoudt, is het aangeraden om een arts te contacteren. Dit kan mogelijks aanwijzen op een infectie",
      trigger: "ExtraHulp"
    },
    {
      id:'ExtraHulp',
      message: 'Kan ik nog ergens mee helpen?',
      trigger: 'Keuze'
    },
    {
      id:'Keuze',
      options: [
        { value: 1, label: "Ja", trigger: "Trommel" },
        { value: 2, label: "Nee", trigger: "Einde" },
      ]
    },
  ];


  return (
    <div>
      <ChatBot steps={logica} botDelay={1500} userDelay={300}  floating={true} hideSubmitButton={true} />
    </div>
  );
};

export default Chatbot;
