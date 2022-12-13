/** @jsxImportSource @emotion/react */

function FuncaoTag() {
    // function tagged(textos, param1, param2) {
    //     console.log("textos", textos);
    //     console.log("Param 1", param1, "Param 2", param2);
    // }

    // tagged`Interpolações: ${2+2} É ${4}`

    function comRest(textos, ...resultados) {
        console.log(textos);
        console.log(...resultados);
        console.log("Interpolações:", resultados.length);
    }
    
    comRest`O resultado de ${2 + 2} é ${4}`
  
    return (
      <div></div>
    )
  }
  
  export default FuncaoTag;