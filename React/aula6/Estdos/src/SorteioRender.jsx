import React from "react";

class SorteioRender extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            numero: Math.random()
        }
    }

    render() {
        return <h2>Número {this.state.numero}</h2>
    }
}

export default SorteioRender;