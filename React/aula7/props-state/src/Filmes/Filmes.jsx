import React from "react";
import FilmeFilho from './FilmesFilho'

class Filmes extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            titulo: "Batman",
            assistido: false,
            filmeAssistido: "nunca"
        }
    }

    filmeAssistido = () => {
        this.setState({
            assistido: !!this.state.assistido ? false : true
        });
        this.setState({
            filmeAssistido: !!this.state.assistido ? "nunca" : "já"
        });
    }

    render() {
        return (
            <div>
                <p>Filme: <strong>{this.state.titulo}</strong></p>
                <p>Já assistiu este filme?</p>
                <input  type="checkbox"
                        id="filme"
                        name="filme"
                        checked={this.state.assistido}
                        onChange={this.filmeAssistido}/> Sim

                <FilmeFilho titulo={this.state.titulo} assistido={this.state.filmeAssistido}/>
            </div>
        )
    }
}

export default Filmes
