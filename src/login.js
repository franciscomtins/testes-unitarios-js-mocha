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

    let usuarioEncontrado = false;

    usuarios.forEach(function(usuario) {

        if (usuario.login === login && usuario.senha === senha) {
            usuarioEncontrado = true;
        }

    });

    if (usuarioEncontrado) {
        return 'Logado com sucesso.';
    } else {
        return 'Usuário não encontrado.';
    }
}

logarComSucesso(loginEsperado, senhaEsperada);