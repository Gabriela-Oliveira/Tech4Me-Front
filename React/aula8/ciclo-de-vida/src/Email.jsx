import React from "react";

class Email extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            titulo: "Jardim Secreto"
        }
    }

    componentDidMount() {
        this.setState({titulo: "Noite Natal"})        
    }

    render() {
        return (
            <div>
                <p>Título <strong>{this.state.titulo}</strong></p>
            </div>
        )
    }
}

export default Email;