import React from 'react'
import Filmes from './Filmes'
import Negrito from './propsChildren'
import Doces from './Doces'

// function App() {
  //  FORMA ESTÁTICA DE CHAMAR O COMPONENTE PASSANDO AS PROPS

  // return (
  //   <div>
  //     <Filmes genero="Comédia" titulo="O meme do mal."/>
  //     <Filmes genero="Ação" titulo="Top Gun."/>
  //     <Filmes genero="Drama" titulo="A paixão de Cristo."/>
  //   </div>
  // )

  //  FORMA DINÂMICA DE CHAMAR O COMPONENTE PASSANDO AS PROPS

  // let filmes = [
  //   {titulo:"Cruela", genero:"Comédia"},
  //   {titulo:"Vingança Fatal", genero:"Ação"},
  //   {titulo:"Uma vida sem limites", genero:"Drama"}
  // ]

  // let itens = []
  
  // for (const filme of filmes) {
  //   itens.push(<Filmes titulo={filme.titulo} genero={filme.genero}/>);
  // }

  // return itens;

  // PROPS CHILDREN

  // return <Negrito>Este é o conteúdo entre tags.</Negrito>

//   return (
//     <div>
//       <Negrito>O Poderoso Chefão (1972)</Negrito>
//       <Negrito>O Mágico de Oz (1939)</Negrito>
//       <Negrito>Cidadão Kane (1941))</Negrito>
//       <Negrito>Dia de Cão</Negrito>
//       <Negrito>Pulp Fiction - Tempo de Violência (1994)</Negrito>
//     </div>
//   )
// }


// CLASS

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <Filmes genero="Comédia" titulo="O meme do mal."/>
//         <Filmes genero="Ação" titulo="Top Gun."/>
//         <Filmes genero="Drama" titulo="A paixão de Cristo."/>
//       </div>
//     )
//   }
// }

function App() {
  return (
    <div>
      <Doces nome="Babaganoush"/>
      <Doces nome="Torrone"/>
      <Doces nome="Pé de Muleque"/>
      <Doces nome="Paço"/>
      <Doces nome="Fini"/>
      <Doces nome="Pirulito"/>
      <Doces nome="Bala"/>
      <Doces nome="Chiclete"/>
    </div>
  )
}

export default App
