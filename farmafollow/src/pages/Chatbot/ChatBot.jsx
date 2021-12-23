import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

//Logica voor de bot
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
      { value: 3, label: "Mijn kind heeft pijn", trigger: "KeelPijn" },
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
    message: "test",
  },
  {
    id: "KeelPijn",
    message: "test",
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
    message: "test",
  },
  {
    id: "NeusMeds",
    message: "test",
  },
  {
    id: "NeusPijn",
    message: "test",
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
    message: "test",
  },
  {
    id: "TrommelMeds",
    message: "test",
  },
  {
    id: "TrommelPijn",
    message: "test",
  },
];

const Chatbot = () => {
  return (
    <div>
      <ChatBot steps={logica} botDelay={500} userDelay={200} floating={true} />
    </div>
  );
};

export default Chatbot;
