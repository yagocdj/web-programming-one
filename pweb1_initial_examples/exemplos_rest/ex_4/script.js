// classe Usuario
class Usuario {
    constructor(nome) {
        this.nome = nome;
    }
}

// classe utilitária de Usuário que se comunica com o servidor
class UsuarioServico {
    constructor(url) {
        this.url = url;
    }

    listar() {
        return fetch(this.url, {
            method: "GET"
        }).then(resposta => resposta.json());
    }

    inserir(usuario) {
        return fetch(this.url, {
            method: "POST",
            body: JSON.stringify(usuario),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(
            resposta => resposta.json()
        );
    }

    remover(id) {
        return fetch(this.url+id, {
            method: "DELETE"
        }).then(resposta => resposta.json());
    }

}

// chama o serviço do usuário para listar os usuários
let usuarioServico = new UsuarioServico(
    "https://my-json-server.typicode.com/gugawag/app-social/usuarios/");

usuarioServico.listar().then(usuarios => {
    for(let usuario of usuarios) {
        inserirElementoUsuario(usuario);
    }
});

// insere um elemento usuário no DOM
function inserirElementoUsuario(usuario) {
    let elementoUsuario = document.createElement('p');
    elementoUsuario.textContent = `Nome: ${usuario.nome}`;
    let botaoApagar = document.createElement('button');
    botaoApagar.textContent = 'X';
    botaoApagar.setAttribute('id', usuario.id);
    botaoApagar.onclick = apagarUsuario;
    elementoUsuario.appendChild(botaoApagar);
    document.body.appendChild(elementoUsuario);
}

// trata click do botão inserir usuário
function inserirUsuario() {
    let nome = document.getElementById('nome').value;

    let usuario = new Usuario(nome);
    usuarioServico.inserir(usuario).then(
        usuario => inserirElementoUsuario(usuario)
    );
}

// trata click do botão apagar usuário
function apagarUsuario() {
   let id = event.target.id;
   usuarioServico.remover(id).then(
       event.target.parentNode.remove()
   );
}