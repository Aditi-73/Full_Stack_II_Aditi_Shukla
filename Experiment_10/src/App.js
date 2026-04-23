import "./App.css";
import Chat from "./Components/Chat";

function App() {
  return (
    <div className="app">
      <div className="grain" />
      <h1 className="app-title">TiraTalk</h1>
      <p className="app-subtitle">Cozy conversations over websockets</p>
      <div className="chat-shell">
        <Chat />
      </div>
    </div>
  );
}

export default App;
