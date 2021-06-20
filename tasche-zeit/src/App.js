import './App.css';
import Login from './components/login';

function App() {
  return (
      <div className="App">
        <h1 className="title">Tasche Zeit</h1>
        <h2 className="description">A simple and pratical time-manager <br/> for those who want to be organized</h2>
        <Login className="login"/>
      </div>
  );
}

export default App;
