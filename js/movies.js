class Filme {
    constructor(imagem, nome, ano) {
        this.imagem = imagem;
        this.nome = nome;
        this.ano = ano;
    }
}

const filmes = [
                new Filme('https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg', 'Iron Man', '2006'),
                new Filme('https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg', 'Batman Begins', '2005'),
                new Filme('https://m.media-amazon.com/images/M/MV5BNGY5NmFmOGItYTY4My00M2JlLTkzYTMtZTUzN2YyZmUzMTlmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg', 'Outlander', '2014'),
                new Filme('https://m.media-amazon.com/images/M/MV5BMzE5MDM1NDktY2I0OC00YWI5LTk2NzUtYjczNDczOWQxYjM0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg', 'Beauty and the Beast', '1991'),
                new Filme('https://m.media-amazon.com/images/M/MV5BMTQxMjY4NzUyM15BMl5BanBnXkFtZTcwMDI4NTk5Mw@@._V1_SX300.jpg', 'Aladin', '2009'),
                new Filme('https://m.media-amazon.com/images/M/MV5BOWIwZGY0OTYtZjUzYy00NzRmLTg5YzgtYWMzNWQ0MmZiY2MwXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_SX300.jpg', 'Barbie', '2023'),
                new Filme('https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_SX300.jpg', 'Oppenheimer', '2023')
]

filmes.forEach(filme => {
    let item = document.createElement('div');
    item.classList.add('item');

    item.innerHTML = `<img src="${filme.imagem}"/><h2>${filme.nome}</h2> <h4>(${filme.ano})</h4>`

    lista.appendChild(item);
})