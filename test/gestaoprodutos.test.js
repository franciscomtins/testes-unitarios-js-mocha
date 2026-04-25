import { retornarProduto, produtos } from '../src/gestaoProdutos.js'
import assert from 'node:assert'

describe('Testes de Gestão de Produtos', function() {

    it('Deve retornar produto válido ao passar índice correto', function() {
        const resultado = retornarProduto(0)
        assert.equal(resultado, 'trackinas')
    });

    it('Deve validar que existem 5 produtos cadastrados', function() {
        assert.equal(produtos.length, 5)
    });

    it('Deve validar inserção de novo item sem alterar lista original', function() {
        const lista = [...produtos]
        lista.push('tamagoche')

        assert.equal(lista.at(-1), 'tamagoche')
        assert.equal(produtos.includes('tamagoche'), false)
    });

    it('Deve lançar erro para índice fora do range', function() {
        assert.throws(() => retornarProduto(10), {
            message: 'Índice Invalido'
        })
    });

    it('Deve lançar erro para tipo inválido (string)', function() {
        assert.throws(() => retornarProduto('abc'), {
            message: 'Tipo inválido'
        })
    });

    it('Deve lançar erro para valor vazio (null)', function() {
        assert.throws(() => retornarProduto(null), {
            message: 'Valor vazio'
        })
    });

    it('Deve lançar erro para valor vazio (undefined)', function() {
        assert.throws(() => retornarProduto(undefined), {
            message: 'Valor vazio'
        })
    });

    it('Deve lançar erro para NaN', function() {
        assert.throws(() => retornarProduto(NaN), {
            message: 'Tipo inválido'
        })
    });

});