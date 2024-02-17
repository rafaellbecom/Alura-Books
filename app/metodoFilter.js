const btnsFiltros = document.querySelectorAll('.btn')
btnsFiltros.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros(){
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value
    let livrosFiltrados = categoria == 'disponiveis' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria)
    exibirLivros(livrosFiltrados)

    if(categoria == 'disponiveis') {
        const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados).toFixed(2)
        exibirValorTotalDeLivroDisponiveis(valorTotal)
    }
}

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}

function exibirValorTotalDeLivroDisponiveis(valorTotal) {
    sectionValorTotalDeLivrosDisponiveis.innerHTML = `
        <div class="livros__disponiveis">
            <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
        </div>
    `
}