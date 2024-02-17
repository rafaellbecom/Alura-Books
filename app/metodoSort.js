const btnOrdenarLivros = document.getElementById('btnOrdenarPorPreco')
btnOrdenarLivros.addEventListener('click', ordenarLivros)

function ordenarLivros() {
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco)
    console.table(livrosOrdenados)
    exibirLivros(livrosOrdenados)
}