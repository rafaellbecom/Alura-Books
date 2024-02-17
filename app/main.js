const endpointAPILivros = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
let livros = []

async function buscarLivrosDaAPI() {
    const res = await fetch(endpointAPILivros)
    livros = await res.json()
    const livrosComDesconto = aplicarDesconto(livros)
    exibirLivros(livrosComDesconto)
}

buscarLivrosDaAPI()