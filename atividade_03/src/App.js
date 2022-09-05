import React, { useState } from 'react'

function App() {
  const [numeroInput, setNumeroInput] = useState(0)
  const [count, setCount] = useState(0)

  const handleRemover = () => setCount(prev => parseInt(prev) - parseInt(numeroInput) )
  const handleAdicionar = () => setCount(prev => parseInt(prev) + parseInt(numeroInput))

  const handleReset = () => {
    setCount(0)
    setNumeroInput(0)
  }

  return (
    <div className="App">
      <p>Contador: {count}</p>
      <input
        type="number"
        defaultValue={0}
        value={numeroInput}
        placeholder="Digite o numero"
        onChange={e => setNumeroInput(e.target.value)}
      />
      <button onClick={() => handleAdicionar()}>Adicionar</button>
      <button onClick={() => handleRemover()}>Remover</button>
      <button onClick={() => handleReset()}>RESET</button>
    </div>
  );
}

export default App;
