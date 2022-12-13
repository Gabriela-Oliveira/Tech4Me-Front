const react = () => {
    let conteudo = `
        O React (também denominado React.js ou ReactJS) é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.

        Criado em 2011 pelo Facebook, com a criação de views declarativas e baseando-se em componentes, possuía o intuito de otimizar a atualização e a sincronização de atividades simultâneas no feed de notícias da rede social e melhorar a manutenção de código.
        
        É mantido pelo Facebook, Instagram, outras empresas e uma comunidade de desenvolvedores individuais. É utilizado nos sites da Netflix, Imgur, Feedly, Airbnb, SeatGeek, HelloSign, Walmart e outros.[5]
        
        Em 2015, o Facebook anunciou o módulo React Native, que em conjunto com o React, possibilita o desenvolvimento de aplicativos para Android e iOS utilizando componentes de interface de usuário nativos de ambas plataformas, sem precisar recorrer ao HTML.[6]
        
        Na pesquisa de 2018 sobre hábitos de desenvolvedores do site Stack Overflow, o React foi a terceira biblioteca ou framework[7] mais citado pelos usuários e desenvolvedores profissionais, ficando atrás somente do Node.js e Angular, respectivamente.[8]
        
        JSX
        Semelhante ao HTML, o JSX é uma extensão de sintaxe para JavaScript. Embora seu uso não seja obrigatório, a maioria dos desenvolvedores o utiliza para descrever como a UI deveria parecer.
        
        Exemplo :
        
        const name = 'Josh Perez';
        const element = <h1>Hello, {name}</h1>;
        
        ReactDOM.render(
        element,
        document.getElementById('root')
        );
        Depois da compilação, as expressões em JSX se transformam em chamadas normais de funções que retornam objetos JavaScript.[9]
        
        Virtual DOM
        É uma representação virtual da interface do usuário que é armazenada em memória e mantida em sincronia com a DOM “real”. Dessa forma, o React só altera na verdadeiro DOM apenas o que foi modificado. Assim,  é abstraída a manipulação de atributos, de eventos e atualização manual do DOM.
        
        A Virtual DOM  está associada aos elementos da biblioteca, que são objetos representando a UI. Entretanto, o React também possui os “fibers”, que são objetos internos que contém informações sobre a árvore de componentes e podem ser considerados parte da Virtual DOM.[10]
    `

    return conteudo;
}

export { react }