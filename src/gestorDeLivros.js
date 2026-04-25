export const livrosCadastrados = [
    {
        id: 1,
        titulo: 'A Sociedade do Anel',
        tema: 'Fantasia',
        preco: 99.90
    },
    {
        id: 2,
        titulo: 'As Duas Torres',
        tema: 'Fantasia',
        preco: 109.90
    },
    {
        id: 3,
        titulo: 'O Retorno do Rei',
        tema: 'Fantasia',
        preco: 119.90
    },
    {
        id: 4,
        titulo: 'O Hobbit',
        tema: 'Fantasia',
        preco: 89.90
    },
    {
        id: 5,
        titulo: 'O Silmarillion',
        tema: 'Fantasia',
        preco: 129.90
    }
];

// 🔹 Retorna o objeto completo
export function retornaLivroPorId(idLivro) {


    /*

    forma mais verbosa

    let livro;

    for (let i = 0; i < livrosCadastrados.length; i++) {
        if (livrosCadastrados[i].id === idLivro) {
            livro = livrosCadastrados[i];
            break; 
        }
    }

    */

    const livro = livrosCadastrados.find(function(livro) {
        return livro.id === idLivro;
    });

    if (!livro) {
        throw new Error('Livro não encontrado');
    }

    if (livro.preco < 0) {
        throw new Error('Preço inválido');
    }

    return livro;
}


export function retornaTituloDoLivroPorId(idLivro) {
    const livro = retornaLivroPorId(idLivro);
    return livro.titulo;
}
