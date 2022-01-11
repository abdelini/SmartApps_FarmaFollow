import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Router, Route, MemoryRouter, BrowserRouter } from "react-router-dom";
import App from "./App";
import UserDetails from "./components/signup/UserDetails"


//Kijken of de routing werkt
test("Navigation works as intended", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  //Kijken of de startpagina laadt
  expect(screen.getByText(/Mijn Profiel/i)).toBeInTheDocument();

  //Simulatie voor een click event
  const leftClick = { button: 0 };
  userEvent.click(screen.getAllByText(/Home/i)[0], leftClick); //Click op de eerste match met de "home" text

  // check dat de nieuwe juiste pagina is geladen met de juiste elementen
  expect(screen.getByText(/Logboek/i)).toBeInTheDocument();
  expect(screen.getByText(/Medicatie/i)).toBeInTheDocument();
  expect(screen.getByText(`Foto's`)).toBeInTheDocument();
  expect(screen.getByText(/Tips/i)).toBeInTheDocument();
});

//Kijken of de routing werkt
test("Navigation works when going backwards and forwards", () => {
  window.history.pushState({}, '', '/chatbot');
  window.location.reload()
  window.history.pushState({}, '', '/home');
  window.location.reload()

  
  render(
    <BrowserRouter > 
      <App />
    </BrowserRouter>
  );

  
  //Kijken of de home pagina laadt  
  expect(screen.getByText(/Logboek/i)).toBeInTheDocument();

  const leftClick = { button: 0 }; //simulatie van linker muis klik
  expect(screen.getByText(/Chatbot/i)).toBeInTheDocument(); //Zoek chatbot link
  userEvent.click(screen.getByText(/Chatbot/i), leftClick);
  expect(screen.getByText('Chat')).toBeInTheDocument();

  

  // // Ga naar de vorige pagina
  userEvent.click(screen.getByText('Chat'), window.history.back())
  expect(screen.getByText(/Logboek/i)).toBeInTheDocument();

  // // Terug op het startscherm en ga nu terug naar de volgende pagina
  userEvent.click(screen.getByText(/Logboek/i), window.history.forward());
  expect(screen.getByText('Chat')).toBeInTheDocument(); // Check dat de juiste volgende pagina is geladen
});







// Private route test, should fail

// test('Private route test when unauthed', () => {
//   render (
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   )
//   //Kijken of de startpagina laadt
//   expect(screen.getByText(/Mijn Profiel/i)).toBeInTheDocument()

//   //Simulatie voor een click event
//   const leftClick = { button: 0 };
//   expect(userEvent.click(screen.getAllByText(/Profiel/i)[0], leftClick)); //Click op de eerste match met de "home" text


//   // check dat de nieuwe juiste pagina is geladen
//   //expect(screen.getByText(/Logboek/i)).toBeInTheDocument();
  

// })