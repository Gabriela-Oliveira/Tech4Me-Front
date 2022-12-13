function ListaDoces() {
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
    </div>

    return listaDoces;
}

function Doces() {
    return (
        <div>
            <h1>Toda a nossa lista de doces!</h1>
            <ListaDoces/>
        </div>
    )
}

export default Doces;