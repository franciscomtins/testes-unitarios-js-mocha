const usuarios = [
  {
    nome: 'Julio',
    login: 'julio.lima',
    senha: '123456'
  },
  {
    nome: 'Aline',
    login: 'aline.benjamim',
    senha: '654321'
  },
  {
    nome: 'Abelhudo',
    login: 'abelhudo.martins',
    senha: '123456'
  }
];

const loginEsperado = 'abelhudo.martins';
const senhaEsperada = '123456';

export function logarComSucesso(login, senha) {

    let usuarioEncontrado = 'Usuário não encontrado.';

    usuarios.forEach(function(usuario) {

        if (usuario.login === login && usuario.senha === senha) {
            usuarioEncontrado = 'Logado com sucesso.';
        }

    });

    return usuarioEncontrado
}

logarComSucesso(loginEsperado, senhaEsperada);