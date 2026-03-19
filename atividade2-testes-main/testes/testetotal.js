window.onload = function () {

   /*
Autor: João Paulo Soares Nogueira
Data: 18/03/2026
Descrição: Testes de cálculo do total e descontos
*/

carrinho = []
clientes = []

// TESTE 16 - Soma simples
carrinho.push({preco:50})
carrinho.push({preco:50})

let total = 100

if(total === 100){
    console.log("✔ TESTE 16 PASSOU")
}else{
    console.log("❌ TESTE 16 FALHOU")
}

// TESTE 17 - Desconto acima de 100
total = 110 * 0.9
if(total === 99){
    console.log("✔ TESTE 17 PASSOU")
}else{
    console.log("❌ TESTE 17 FALHOU")
}

// TESTE 18 - Cliente VIP (15%)
clientes.push({vip:true})
total = 100 * 0.85

if(total === 85){
    console.log("✔ TESTE 18 PASSOU")
}else{
    console.log("❌ TESTE 18 FALHOU")
}

/*
Autor: João Paulo Soares Nogueira
Data: 18/03/2026
Descrição: Testa se o carrinho vazio retorna total igual a zero
*/

// TESTE 21 - Carrinho vazio

carrinho = []

total = 0

if(carrinho.length === 0 && total === 0){
    console.log("✔ TESTE 21 PASSOU")
}else{
    console.log("❌ TESTE 21 FALHOU")
}
/*
=========================================================
TESTE 25 - VALIDAÇÃO DE NOME (SEM NÚMEROS OU CARACTERES ESPECIAIS)
Autor: João Paulo Soares Nogueira
Data: 18/03/2026
Descrição: Garante que nomes de cliente, pet e produto 
não aceitem números nem caracteres especiais
=========================================================
*/

/*
notei que o sistema aceitava qualquer tipo de nome,
inclusive com números e caracteres especiais, o que não é ideal.

Antes estava assim:
let nome = "Rex123@"

E isso passava sem validação.

Então concluí que seria melhor aplicar uma validação usando
expressão regular para permitir apenas letras e espaços.
*/

// Função de validação
function nomeValido(nome){
    return /^[A-Za-zÀ-ÿ\s]+$/.test(nome)
}

// TESTE 25.1 - Nome válido (apenas letras)
let nomeTeste = "Rex"

if(nomeValido(nomeTeste)){
    console.log("✔ TESTE 25.1 PASSOU")
}else{
    console.log("❌ TESTE 25.1 FALHOU")
}

// TESTE 25.2 - Nome com número (inválido)
nomeTeste = "Rex123"

if(!nomeValido(nomeTeste)){
    console.log("✔ TESTE 25.2 PASSOU")
}else{
    console.log("❌ TESTE 25.2 FALHOU")
}

// TESTE 25.3 - Nome com caractere especial (inválido)
nomeTeste = "Rex@!"

if(!nomeValido(nomeTeste)){
    console.log("✔ TESTE 25.3 PASSOU")
}else{
    console.log("❌ TESTE 25.3 FALHOU")
}

// TESTE 25.4 - Nome com espaço (válido)
nomeTeste = "Rex Silva"

if(nomeValido(nomeTeste)){
    console.log("✔ TESTE 25.4 PASSOU")
}else{
    console.log("❌ TESTE 25.4 FALHOU")
}
}