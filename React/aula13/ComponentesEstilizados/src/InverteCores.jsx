/** @jsxImportSource @emotion/react */

import { useState } from "react";

function InverteCores() {
    const [corAzul, setCorAzul] = useState(true);
    const [corVermelha, setCorVermelha] = useState(false);

    const azul = { background: "blue" };
    const vermelho = { background: "red" };
  
    return (
      <div>
        <div>
            <label>Azul</label>
            <input type="checkbox" checked={corAzul} onChange={(evento) => setCorAzul(evento.target.checked)}/>
        </div>

        <div>
            <label>Vermelho</label>
            <input type="checkbox" checked={corVermelha} onChange={(evento) => setCorVermelha(evento.target.checked)}/>
        </div>

        <div css={!!corAzul ? azul : vermelho}>
            Olá Mundo!
        </div>
      </div>
    )
  }
  
  export default InverteCores;