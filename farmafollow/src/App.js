import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import LogboekScherm from "./pages/Logboek/LogboekScherm";
import ChatBot from "./pages/Chatbot/ChatBot";


function App() {
  return (
    <div className="App">
      {/* <LogboekScherm /> */}
      
       <ChatBot />
      
    </div>
  );
}

export default App;
