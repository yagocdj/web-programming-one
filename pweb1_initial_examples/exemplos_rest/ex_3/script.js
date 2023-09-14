let recurso = "https://my-json-server.typicode.com/gugawag/app-social/usuarios/";

removeUsuario(2);

function removeUsuario(id) {
    fetch(recurso + id) // /usuarios/id
        .then(resposta => resposta.json()) // devolve o usuário apagado
        .then(usuario => console.log(`Usuário ${usuario.nome} removido com sucesso!`)
        );
}