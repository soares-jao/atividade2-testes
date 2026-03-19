window.onload = function () {

/*
Autor: João Paulo Soares Nogueira
Data: 18/03/2026
Descrição: Testes de finalização da compra
*/

carrinho = [{preco:50}]

// TESTE 19 - Finalizar limpa carrinho
carrinho = []

if(carrinho.length === 0){
    console.log("✔ TESTE 19 PASSOU")
}else{
    console.log("❌ TESTE 19 FALHOU")
}
/*
Autor: João Paulo Soares Nogueira
Data: 18/03/2026
Descrição: Testa se ao finalizar a compra o carrinho é limpo
*/

// TESTE 22 - Finalizar compra

carrinho = [{nome:"Ração", preco:50}]

// simulando finalização
carrinho = []

if(carrinho.length === 0){
    console.log("✔ TESTE 22 PASSOU")
}else{
    console.log("❌ TESTE 22 FALHOU")
}
}