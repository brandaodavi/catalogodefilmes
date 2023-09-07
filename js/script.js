const key = '283db150';

const formulario = document.querySelector('form');

const lista = document.querySelector('div.lista');

formulario.onsubmit = (ev) => {
    ev.preventDefault();
    
    const pesquisa = ev.target.pesquisa.value;

    if(pesquisa == ''){
        alert('Preencha o campo!');
        return;
    }

    fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${key}&s=${pesquisa}`)
    .then(result => result.json())
    .then(json => carregarLista(json));

}

const carregarLista = (json) =>{

    if(json.Response == "False"){
        lista.innerHTML = "NENHUM FILME ENCONTRADO";
        return;

    }
    lista.innerHTML = "";
    json.Search.forEach(element => {
        console.log(element);

        

        let item = document.createElement('div');
        item.classList.add('item');

        item.innerHTML = `<img src="${element.Poster}"/><h2>${element.Title}</h2> <h4>(${element.Year})</h4>`;

        lista.appendChild(item);
    });
 
}