function Expressao() {
    // let nome = "React";
    // let oi = <p>Bem vindos ao {nome + "!"}</p>;

    // return (
    //     oi
    // )

    // const m1 = <em>pedras</em>;
    // const m2 = <strong>sais</strong>;

    // return <p>Os minerais são compostos de {m1} e {m2}</p>;

    const fusca = { ano: 1966, direcao: true };
    
    return (
        <div>
            <h2>Carro fabricado em {fusca.ano}</h2>
            <h3>Possui direção? {fusca.direcao}</h3>
            <h3>Possui direção? {fusca.direcao ? "Sim" : "Não"}</h3>
        </div>
    );
}

export default Expressao