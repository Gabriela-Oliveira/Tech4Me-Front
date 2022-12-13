function FilmeFilho(props) {
    return (
        <div>
            <p>Você <strong>{props.assistido}</strong> assistiu o filme <strong>{props.titulo}</strong></p>
        </div>
    )
}

export default FilmeFilho;