import './App.css';
import Login from './components/login';

function App() {
  return (
      <div className="App">
        <h1 className="title">Tasche Zeit</h1>
        <h2>A simple and pratical time-manager for those who want to be organized</h2>
        <p className="version">Currently on version 0.1</p>

        <Login />

        <p className="footer">UTFPR, Dois Vizinhos, Engenharia de Software, 4o periodo (2021)</p>
      </div>
  );
}

export default App;
