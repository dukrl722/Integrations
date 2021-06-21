//import './App.css';
import Login from './components/login';
import Indice from './components/indice';
import {Route, Link} from 'react-router-dom';

function App() {
  return (
      <div className="App">
        <Route exact path="/" component={Login} />
        <Route exact path="/index" component={Indice} />
      </div>
  );
}

export default App;
