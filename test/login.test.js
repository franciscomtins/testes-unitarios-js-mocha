import { logarComSucesso } from '../src/login.js';
import assert from 'node:assert';

describe('Login de usuários', function() {

    it('Deve permitir login com credenciais válidas', function() {

        // arrange
        const login = 'abelhudo.martins';
        const senha = '123456';
        const mensagemEsperada = 'Logado com sucesso.';

        // act
        const resultado = logarComSucesso(login, senha);

        // assert
        assert.equal(resultado, mensagemEsperada);

    });

    it('Não deve permitir login com usuário inválido', function() {

        // arrange
        const login = 'usuario.invalido';
        const senha = '123456';
        const mensagemEsperada = 'Usuário não encontrado.';

        // act
        const resultado = logarComSucesso(login, senha);

        // assert
        assert.equal(resultado, mensagemEsperada);

    });

    it('Não deve permitir login com senha inválida', function() {

        // arrange
        const login = 'abelhudo.martins';
        const senha = 'senha.invalida';
        const mensagemEsperada = 'Usuário não encontrado.';

        // act
        const resultado = logarComSucesso(login, senha);

        // assert
        assert.equal(resultado, mensagemEsperada);

    });

    it('Não deve permitir login com usuário e senha inválidos', function() {

        // arrange
        const login = 'usuario.invalido';
        const senha = 'senha.invalida';
        const mensagemEsperada = 'Usuário não encontrado.';

        // act
        const resultado = logarComSucesso(login, senha);

        // assert
        assert.equal(resultado, mensagemEsperada);

    });

});