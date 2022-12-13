import React from "react";
import FilmeFilho from "./FilmeFilho";

class Filme extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tipo: "",
            listaFilmes: []
        }
    }

    componentDidMount(){
        this.getFilmes();
    }

    getFilmes = async () => {
        const response = await fetch('http://localhost:3000/filmes');
        this.setState({listaFilmes: await response.json()});
        console.log(this.state.listaFilmes);
    }

    tipoTitulo = (event) => {
        console.log(event);
        this.setState({tipo: event.target.value})
    };

    render() {
        return (
            <div>
                <FilmeFilho tipo={this.state.tipo} tipoTituloFunction={this.tipoTitulo} listaFilmes={this.state.listaFilmes}/>
            </div>
        )
    }
}

export default Filme;