const getMunicipio = async () => {
    const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados/RJ/municipios');
    const myJson = await response.json();

    console.log(response);
    console.log(myJson);

    var addLi = ""
    var itemLi = ""

    for (let i = 0; i < myJson.length; i++) {
        if(myJson[i].nome === "Nova Friburgo" || myJson[i].nome === "Petrópolis" || myJson[i].nome === "Teresópolis") {
            addLi = document.createElement("li");
            itemLi = document.createTextNode(myJson[i].nome);
            addLi.appendChild(itemLi);
            document.getElementById("municipios").appendChild(addLi); 
        }
    }
}

getMunicipio();