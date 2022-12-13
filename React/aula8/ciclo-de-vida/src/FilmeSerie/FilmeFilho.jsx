function FilmeFilho(props) {
    return (
        <div>
            {props.listaFilmes.map(itemFilme => <div>{itemFilme.nome} {itemFilme.tipo}</div>)}
            <div>
                <input type="text" name="tipo" onChange={props.tipoTituloFunction} />
                <p>{props.tipo}</p>
            </div>
        </div>
    )
}

export default FilmeFilho;