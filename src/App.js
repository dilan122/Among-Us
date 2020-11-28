import logo from './logo.svg';
import './App.css';
import Boton from './Play';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h1><code>Bienvenidos al proyecto</code> Among Us.</h1>
        </p>
        <div className='Component'>
          <a href="http://127.0.0.1:5500/src/Mapa.html"></a><Boton/>
        </div>
      </header>
    </div>
  );
}

export default App;
