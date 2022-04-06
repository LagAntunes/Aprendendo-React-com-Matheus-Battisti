import './App.css';
import Botao from './components/botao.js';

function App() {
  const mano = <h2>Aprendendo o corre, mano</h2>

  function teste() {
    return(
      <div>
      <p>aaaaaaaaaaaaaaaaaa</p>
      </div>
    )
  }

  return (
    <div className="App">
      <h1 className="classeTeste">Iniciando React</h1>
      <p>Testando a const: {mano}</p>
      {teste()}

      <Botao/>
    </div>
  );
}

export default App;
