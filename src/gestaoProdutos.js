export const produtos = [
    'trackinas',
    'ps4',
    'camiseta nike',
    'boneco do Maandaloriano',
    'MacBook Pro M5'
];

export function retornarProduto(indiceProduto) {

    if (indiceProduto === null || indiceProduto === undefined) {
        throw new Error('Valor vazio')
    }

    if (typeof indiceProduto !== 'number' || Number.isNaN(indiceProduto)) {
        throw new Error('Tipo inválido')
    }

    if (indiceProduto < 0 || indiceProduto >= produtos.length) {
        throw new Error('Índice Invalido')
    }

    return produtos.at(indiceProduto)
}