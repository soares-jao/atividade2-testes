window.onload = function () {

   // testes aqui

/*
=========================================================
TESTES DE PRODUTOS
RESPONSÁVEL: JOAO PAULO SOARES NOGUEIRA
DATA: 14/03/2026
=========================================================
*/

/* TESTE 10 - Deve permitir criar produto com nome */

produtoNome.value = "Ração"
produtoPreco.value = "50"

criarProduto()

console.log("TESTE 10 - Produto criado")


/* TESTE 11 - Produto deve possuir preço maior que zero */

produtoNome.value = "Coleira"
produtoPreco.value = "25"

criarProduto()

console.log("TESTE 11 - Preço válido")


/* TESTE 12 - Produto não pode possuir preço negativo */

produtoNome.value = "Brinquedo"
produtoPreco.value = "-10"

criarProduto()

console.log("TESTE 12 - Alerta preço inválido")


/* TESTE 13 - Produto deve aparecer na lista */

produtoNome.value = "Shampoo"
produtoPreco.value = "30"

criarProduto()

renderProdutos()

console.log("TESTE 13 - Produto exibido na lista")


/*
=========================================================
TESTES DE PRODUTOS
RESPONSÁVEL: JOAO PAULO SOARES NOGUEIRA
DATA: 16/03/2026
=========================================================
*/

/*
TESTE 14
Deve permitir criar produto com nome
*/

produtoNome.value = "Ração Premium"
produtoPreco.value = "50"

criarProduto()

console.log("TESTE 10 - Produto criado com nome")



/*
TESTE 15
Produto deve possuir preço maior que zero
*/

produtoNome.value = "Coleira"
produtoPreco.value = "25"

criarProduto()

console.log("TESTE 11 - Produto com preço maior que zero criado")



/*
TESTE 16
Produto não pode possuir preço negativo
*/

produtoNome.value = "Brinquedo"
produtoPreco.value = "-10"

criarProduto()

console.log("TESTE 12 - Sistema deve exibir alerta 'Preço inválido'")



/*
TESTE 17
Produto deve aparecer na lista de produtos cadastrados
*/

produtoNome.value = "Shampoo Pet"
produtoPreco.value = "30"

criarProduto()

renderProdutos()

console.log("TESTE 13 - Produto exibido na lista de produtos")
}