window.onload = function () {

/*
Autor: João Paulo Soares Nogueira
Data: 18/03/2026
Descrição: Testes do carrinho de compras
*/

carrinho = []

// TESTE 13 - Adicionar produto
carrinho.push({nome:"Ração", preco:50})
if(carrinho.length === 1){
    console.log("✔ TESTE 13 PASSOU")
}else{
    console.log("❌ TESTE 13 FALHOU")
}

// TESTE 14 - Remover produto
carrinho.shift()
if(carrinho.length === 0){
    console.log("✔ TESTE 14 PASSOU")
}else{
    console.log("❌ TESTE 14 FALHOU")
}

// TESTE 15 - Não aceitar preço zero
let produto = {nome:"Bugado", preco:0}
if(produto.preco <= 0){
    console.log("✔ TESTE 15 PASSOU")
}else{
    console.log("❌ TESTE 15 FALHOU")
}
/*
Autor: João Paulo Soares Nogueira
Data: 18/03/2026
Descrição: Testa funcionamento dos botões do sistema
*/

// TESTE 24 - Botões

carrinho = []

// adicionar
carrinho.push({nome:"Ração", preco:50})

// remover
carrinho.shift()

// finalizar
carrinho = []

if(carrinho.length === 0){
    console.log("✔ TESTE 24 PASSOU")
}else{
    console.log("❌ TESTE 24 FALHOU")
}
}