import { 
    retornaTituloDoLivroPorId, 
    retornaLivroPorId, 
    livrosCadastrados 
} from '../src/gestorDeLivros.js';

import assert from 'node:assert';

describe('Validações gestor de livros cadastrados', function() {

    it('Retorna título do livro por ID com sucesso', function() {

        const idLivroBuscado = 4;
        const tituloEsperado = 'O Hobbit';

        const titulo = retornaTituloDoLivroPorId(idLivroBuscado);

        assert.equal(titulo, tituloEsperado);
    });

    it('Valida busca por ID não informado (undefined)', function() {

        const idLivroBuscado = undefined;

        assert.throws(
            function() { retornaTituloDoLivroPorId(idLivroBuscado); },
            { message: 'Livro não encontrado' }
        );
    });

    it('Valida que o ID retornado é igual ao ID usado na busca', function() {

        const idLivro = 1;

        const livro = retornaLivroPorId(idLivro);

        assert.equal(livro.id, idLivro);
    });


    it('Deve lançar erro se o livro tiver preço negativo', function() {

        const livroInvalido = {
            id: 99,
            titulo: 'Livro Bugado',
            tema: 'Erro',
            preco: -10
        };

        livrosCadastrados.push(livroInvalido);

        assert.throws(
            function() { retornaLivroPorId(99); },
            { message: 'Preço inválido' }
        );

        // limpeza (boa prática)
        livrosCadastrados.pop();
    });

});