import { react } from "./arquivo1.js"
import { javascript } from "./arquivo2.js"

function conteudoReact(){
    // let seletor = document.querySelector("['id=javascript']");
    let seletor = document.getElementById("javascript1");
    let temSeletor = seletor ? seletor.parentNode : null;

    if(temSeletor){
        temSeletor.removeChild(seletor);
    }

    let addLi = document.createElement("p");
    addLi.setAttribute("id", "react1");

    let itemLi = document.createTextNode(react());
    addLi.appendChild(itemLi);
    document.getElementById("container").appendChild(addLi);
}

function conteudoJavaScript(){
    // let seletor = document.querySelector("['id=react']");
    let seletor =  document.getElementById("react1");
    let temSeletor = seletor ? seletor.parentNode : null;

    if(temSeletor){
        temSeletor.removeChild(seletor);
    }

    let addLi = document.createElement("p");
    addLi.setAttribute("id", "javascript1");
    console.log(addLi);

    let itemLi = document.createTextNode(javascript());
    addLi.appendChild(itemLi);
    document.getElementById("container").appendChild(addLi);
}

let inputReact = document.getElementById("react");
inputReact.addEventListener("click", conteudoReact);

let inputJavascript = document.getElementById("javascript");
inputJavascript.addEventListener("click", conteudoJavaScript);