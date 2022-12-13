import React, { useState } from "react";

function SeletorCores() {
    const [cor, setCor] = useState("");

    return(
        <div>
            <button onClick={() => setCor("Vermelho")}>Vermelho</button>
            <button onClick={() => setCor("Anil")}>Anil</button>
            <button onClick={() => setCor("Magenta")}>Magenta</button>

            <p>{cor}</p>
        </div>
    )
}

export default SeletorCores;