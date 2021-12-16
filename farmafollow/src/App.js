import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import LogboekScherm from "./pages/Logboek/LogboekScherm";
import Chatbot from "./pages/Chatbot/ChatBot.jsx";

function App() {
  return (
    <div className="App">
      <LogboekScherm />

      <Chatbot />
    </div>
  );
}

export default App;
