let elementoImagem = document.querySelector("#imagem");

let enderecoImagem = "https://images.unsplash.com/photo-1686710614705-bf7fc2338cac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80";

function tratarBotaoMostrar() {
    fetch(enderecoImagem)
    .then(resposta => resposta.blob())
    .then(blob => {
        let objectURL = URL.createObjectURL(blob);
        elementoImagem.src = objectURL;
        console.log("log no fetch");
    });

    console.log("log fora do fetch");
}