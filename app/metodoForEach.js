const sectionLivros = document.querySelector('#livros')

function exibirLivros(listaDeLivros){
    sectionLivros.innerHTML = ''
    listaDeLivros.forEach((livro) => {
        sectionLivros.innerHTML += `
            <div class="livro">
                <img class="livro__imagens" src="${livro.imagem}" alt="${livro.alt}" />
                <div class="tags">
                    <span class="tag">${livro.categoria}</span>
                </div>
                <h2 class="livro__titulo">${livro.titulo}</h2>
                <p class="livro__descricao">${livro.autor}</p>
                <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
            </div>
        `
    })
}