import React from "react";

export default function() {
    let listaDoces = 
    <div>
        <h2>Listas não ordenadas</h2>

        <ul>
            <li>Bala</li>
            <li>Chiclete</li>
            <li>Pirulito</li>
        </ul>

        <h2>Listas ordenadas</h2>

        <ol>
            <li>Bala</li>
            <li>Chiclete</li>
            <li>Pirulito</li>
        </ol>

        <textarea name="teste" rows={4} />
    </div>

    return listaDoces;
}