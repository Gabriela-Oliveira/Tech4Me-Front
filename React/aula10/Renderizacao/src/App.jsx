import { useState } from 'react'

function App() {
  const [anotacao, setAnotacao] = useState('')
  const [anotacoes] = useState([])

  function handleChange(evento) {
    setAnotacao(evento.target.value);
  }

  function add() {
    anotacoes.push(anotacao);
    setAnotacao("");
  }

  return (
    <div className="App">
      <textarea value={anotacao} onChange={handleChange} name="" id="" cols="30" rows="10"></textarea>
      <div>
        <button onClick={add}>Adicionar Anotações</button>
      </div>
      {anotacoes.map(item => <div>{item}</div>)}
    </div>
  )
}

export default App;
