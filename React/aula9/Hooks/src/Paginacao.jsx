import React, { useState } from "react";

function Peginacao() {
    const [numero, setNumero] = useState(1)

    function anterior() {
        setNumero(numero - 1)
    };

    function proximo () {
        setNumero(numero + 1)
    };
    
    return (
    <div className='container' style={{display: "flex"}}>
        <button onClick={anterior} disabled={numero === 1} style={{margin:"10px"}}>Anterior</button>
        <h3>{numero}</h3>
        <button onClick={proximo} style={{margin:"10px"}}>Próximo</button>
    </div>
    )
}

export default Peginacao;