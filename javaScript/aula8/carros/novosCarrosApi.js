
import { postCarro, getCarro, putCarro, deleteCarro } from "./crudCarros.js";

const criarCadastro = async () => {
    let inputId = document.getElementById("id").value;
    let inputNome = document.getElementById("nome").value;
    let inputModelo = document.getElementById("modelo").value;
    let inputCor = document.getElementById("cor").value;
    let inputAno = document.getElementById("ano").value;
    
    postCarro(inputId, inputNome, inputModelo, inputCor, inputAno);
}

const listarCarros = async () => {
    let listaCarros = await getCarro();

    let addLi = ""
    let itemLi = ""

    for (let i = 0; i < listaCarros.length; i++) {
        addLi = document.createElement("li");
        itemLi = document.createTextNode(`ID: ${listaCarros[i].id} - ${listaCarros[i].nome} - ${listaCarros[i].modelo}`);
        addLi.appendChild(itemLi);
        document.getElementById("getCarros").appendChild(addLi); 
    }
}

const editarCadastro = async () => {
    console.log('oi');
    let inputId = document.getElementById("id").value;
    let inputNome = document.getElementById("nome").value;
    let inputModelo = document.getElementById("modelo").value;
    let inputCor = document.getElementById("cor").value;
    let inputAno = document.getElementById("ano").value;

    console.log(inputId);
    
    putCarro(inputNome, inputModelo, inputCor, inputAno, inputId);
}

const deletarCarros = async () => {
    let inputId = document.getElementById("idCarro").value;
    deleteCarro(inputId);
}

let inputGet = document.getElementById("getCarros");
inputGet.addEventListener("click", listarCarros);

let inputEnviar = document.getElementById("enviar");
inputEnviar.addEventListener("click", criarCadastro);

let inputEditar = document.getElementById("editar");
inputEditar.addEventListener("click", editarCadastro);

let inputDeletar = document.getElementById("deleteCarros");
inputDeletar.addEventListener("click", deletarCarros);