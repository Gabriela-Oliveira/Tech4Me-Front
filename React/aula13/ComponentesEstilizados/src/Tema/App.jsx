/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { css } from '@emotion/react'

function App() {

    const [isDark, setIsDark] =  useState(false);

    const estiloGeral = {
        pedding: "50px 0",
        textAlign: "center",
        height: "100vh",
        transitionDuration: "0.2s",
        transitionProperty: "background-color, color"
    }

    const themeLight = {
        color: "#000",
        background: "#fff",
        ...estiloGeral
    }

    const themeDark = {
        color: "#fff",
        background: "#121212",
        ...estiloGeral
    }

    return(
        <div css={isDark ? themeDark : themeLight}>
            <h1>Olá o tema é: {isDark ? "Dark" : "Light"}</h1>
            <h2>Vamos fazer uma mágia!</h2>

            <button css={css`
                margin-top: 30px;
                padding: 14px 28px;
                font-size: 16px;
                transition-duration: 0.2s;
                transition-property: background-color, color;
                cursor: pointer;
            `}
            onClick={() => {setIsDark(!isDark)}}
            >
                Mudar para tema {isDark ? "Light" : "Dark"}
            </button>
        </div>
    )
}

export default App;
