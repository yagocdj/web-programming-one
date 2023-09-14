let resposta = {
    "usuarios": [
        {
            "id": 1,
            "nome": "Usuário 1",
            "login": "u1"
        },
        {
            "id": 2,
            "nome": "Usuário 2",
            "login": "u2"
        },
        {
            "id": 3,
            "nome": "Usuário 3",
            "login": "u3"
        }
    ],
    "mensagens": [
        {
            "id": 1,
            "texto": "Bom dia, meus corações"
        },
        {
            "id": 2,
            "texto": "Beijos de luz"
        },
        {
            "id": 3,
            "texto": "Estevão Ferreira é brabo"
        }
    ]
}
  
for (let usuario of resposta.usuarios) {
    console.log(usuario.login);
}

for (let mensagem of resposta.mensagens) {
    console.log(mensagem.texto);
}