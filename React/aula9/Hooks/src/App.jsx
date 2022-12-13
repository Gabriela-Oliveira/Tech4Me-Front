import React from "react";

function App() {
  const nome = React.useState("Zépa");
  const endereço = React.useState("Avenida Brasil");

  console.log(nome);
  console.log(endereço);

  return (
    <div>
      <div>
        <p>{nome}</p>
        <input type="text" />
      </div>
      {/* <p>Nome</p> */}
      <div>
        <p>{endereço}</p>
        <input type="text" />
      </div>
    </div>
  )
}

export default App;