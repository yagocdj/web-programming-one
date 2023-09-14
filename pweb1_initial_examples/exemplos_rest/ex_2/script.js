let recurso = "https://my-json-server.typicode.com/gugawag/app-social/usuarios/";

// resposta.json() -> parse a JSON to a JS object

fetch(recurso)
    .then(resposta => resposta.json()) // devolve a resposta em json
    .then(usuarios => mostraNomeUsuarios(usuarios));

function mostraNomeUsuarios(usuarios) {
    for (let usuario of usuarios) {
        console.log(usuario.nome);
    }
}