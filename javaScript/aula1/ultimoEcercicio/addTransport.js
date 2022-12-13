var i = 0

function addLI(veiculo){
    if(veiculo == ""){
        alert("Informe um veículo");
    }else{
        var lista=document.getElementById("transporte");
        var novoItem=document.createElement("li");
        novoItem.textContent=veiculo;
        lista.appendChild(novoItem);

        console.log(i);
        if (i === 0) {
            document.getElementById("transporte").style.color = "green";
            i++

            console.log(i);
        } else {
            document.getElementById("transporte").style.color = "red";
            i--

            console.log(i);
        }
    }
}