import './App.css';

import Evento from './components/Evento'
import TipoIngresso from './components/TipoIngresso'

function App() {
  const nome = 'Gustavo Lima'
  const data = '2 de agosto de 2019 (Sexta-Feira)'
  const horario = '18h30 - 00h00'
  const local = 'Parque do Povo'
  const cidade = 'Campina Grande/PR'
  const genero = 'Arte em forma de SERTANEJO'

  const tipo = 'Camarote'
  const preco = 'R$150,00'

  return (
    <div className="App">
      <Evento nome={nome} data={data} horario={horario} local={local} cidade={cidade} genero={genero} />
      <TipoIngresso tipo={tipo} preco={preco} />
    </div>
  );
}

export default App;
