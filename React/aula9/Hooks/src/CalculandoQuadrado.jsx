import { useEffect, useState } from "react";

function Quadrado() {
    const [numero, setNumero] = useState(1);
    const [quadrado, setQuadrado] = useState(1);

    function anterior() {
        setNumero(numero - 1)
    };

    function proximo () {
        setNumero(numero + 1)
    };
        
    useEffect(() => {
        setQuadrado(numero * numero)
    },[numero])

    return(
        <div className='container' style={{display: "flex"}}>
            <button onClick={anterior} disabled={numero === 1} style={{margin:"10px"}}>-</button>
            <h3>{numero}</h3>
            <button onClick={proximo} style={{margin:"10px"}}>+</button>
            <h2>O quadrado de {numero} é: {quadrado}</h2>
        </div>
    )
}

export default Quadrado;