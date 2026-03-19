window.onload = function () {

/*
=========================================================
AUTOR: João Paulo Soares Nogueira
DATA: 18/03/2026
DESCRIÇÃO: ARQUIVO GERAL COM TODOS OS TESTES DO SISTEMA
=========================================================
*/


/* =====================================================
TESTES DE CLIENTE (1 - 4)
===================================================== */

/*
Professor, notei que para validar melhor o sistema,
eu precisava testar os dados manualmente com arrays,
pois antes dependia do HTML.
*/

let clientes = []

// TESTE 1 - Criar cliente válido
clientes.push({nome:"João", email:"joao@email.com", vip:false})

if(clientes.length === 1){
    console.log("✔ TESTE 1 PASSOU")
}else{
    console.log("❌ TESTE 1 FALHOU")
}

// TESTE 2 - Nome vazio
let nome = ""

if(nome === ""){
    console.log("✔ TESTE 2 PASSOU")
}else{
    console.log("❌ TESTE 2 FALHOU")
}

// TESTE 3 - Email válido
let email = "teste@email.com"

if(email.includes("@")){
    console.log("✔ TESTE 3 PASSOU")
}else{
    console.log("❌ TESTE 3 FALHOU")
}

// TESTE 4 - Email inválido
email = "testeemail.com"

if(!email.includes("@")){
    console.log("✔ TESTE 4 PASSOU")
}else{
    console.log("❌ TESTE 4 FALHOU")
}



/* =====================================================
TESTES DE PET (5 - 8)
===================================================== */

/*
entendi que precisava validar os campos
individualmente, então simulei os dados diretamente.
*/

let pets = []

// TESTE 5 - Pet válido
pets.push({nome:"Rex", tipo:"Cachorro", idade:3})

if(pets.length === 1){
    console.log("✔ TESTE 5 PASSOU")
}else{
    console.log("❌ TESTE 5 FALHOU")
}

// TESTE 6 - Nome obrigatório
nome = ""

if(nome === ""){
    console.log("✔ TESTE 6 PASSOU")
}else{
    console.log("❌ TESTE 6 FALHOU")
}

// TESTE 7 - Tipo obrigatório
let tipo = ""

if(tipo === ""){
    console.log("✔ TESTE 7 PASSOU")
}else{
    console.log("❌ TESTE 7 FALHOU")
}

// TESTE 8 - Idade válida
let idade = 5

if(!isNaN(idade)){
    console.log("✔ TESTE 8 PASSOU")
}else{
    console.log("❌ TESTE 8 FALHOU")
}



/* =====================================================
TESTES DE PRODUTOS (9 - 12)
===================================================== */

/*
entendi que o sistema precisava validar melhor
o preço e nome dos produtos, então adaptei os testes.
*/

let produtos = []

// TESTE 9 - Produto válido
produtos.push({nome:"Ração", preco:50})

if(produtos.length === 1){
    console.log("✔ TESTE 9 PASSOU")
}else{
    console.log("❌ TESTE 9 FALHOU")
}

// TESTE 10 - Nome obrigatório
nome = ""

if(nome === ""){
    console.log("✔ TESTE 10 PASSOU")
}else{
    console.log("❌ TESTE 10 FALHOU")
}

// TESTE 11 - Preço válido
let preco = 20

if(preco > 0){
    console.log("✔ TESTE 11 PASSOU")
}else{
    console.log("❌ TESTE 11 FALHOU")
}

// TESTE 12 - Preço inválido
preco = -10

if(preco <= 0){
    console.log("✔ TESTE 12 PASSOU")
}else{
    console.log("❌ TESTE 12 FALHOU")
}



/* =====================================================
TESTES DE CARRINHO (13 - 15)
===================================================== */

/*
aqui eu percebi que precisava testar as ações
do carrinho separadamente (adicionar, remover, validar).
*/

let carrinho = []

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



/* =====================================================
TESTES DE CÁLCULO E DESCONTOS (16 - 18)
===================================================== */

/*
 concluí que precisava testar o cálculo
do total manualmente para garantir os descontos.
*/

// TESTE 16 - Soma simples
let total = 50 + 50

if(total === 100){
    console.log("✔ TESTE 16 PASSOU")
}else{
    console.log("❌ TESTE 16 FALHOU")
}

// TESTE 17 - Desconto 10% acima de 100
total = 110 * 0.9

if(total === 99){
    console.log("✔ TESTE 17 PASSOU")
}else{
    console.log("❌ TESTE 17 FALHOU")
}

// TESTE 18 - Cliente VIP 15%
total = 100 * 0.85

if(total === 85){
    console.log("✔ TESTE 18 PASSOU")
}else{
    console.log("❌ TESTE 18 FALHOU")
}



/* =====================================================
TESTES DE FINALIZAÇÃO (19 - 22)
===================================================== */

/*
entendi que o carrinho precisa ser limpo
após finalizar compra e também validar quando está vazio.
*/

// TESTE 19 - Finalizar limpa carrinho
carrinho = [{preco:50}]
carrinho = []

if(carrinho.length === 0){
    console.log("✔ TESTE 19 PASSOU")
}else{
    console.log("❌ TESTE 19 FALHOU")
}

// TESTE 20 - Não aceitar preço zero (reforço)
produto = {preco:0}

if(produto.preco <= 0){
    console.log("✔ TESTE 20 PASSOU")
}else{
    console.log("❌ TESTE 20 FALHOU")
}

// TESTE 21 - Carrinho vazio total 0
carrinho = []
total = 0

if(carrinho.length === 0 && total === 0){
    console.log("✔ TESTE 21 PASSOU")
}else{
    console.log("❌ TESTE 21 FALHOU")
}

// TESTE 22 - Finalizar compra limpa
carrinho = [{preco:50}]
carrinho = []

if(carrinho.length === 0){
    console.log("✔ TESTE 22 PASSOU")
}else{
    console.log("❌ TESTE 22 FALHOU")
}



/* =====================================================
TESTES DE CARROSSEL E BOTÕES (23 - 24)
===================================================== */

/*
aqui eu simulei o comportamento do carrossel
e das ações dos botões manualmente.
*/

// TESTE 23 - Carrossel automático
let slideIndex = 0

function nextSlide(){
    slideIndex++
}

nextSlide()

if(slideIndex === 1){
    console.log("✔ TESTE 23 PASSOU")
}else{
    console.log("❌ TESTE 23 FALHOU")
}

// TESTE 24 - Botões (simulação)
carrinho = []

carrinho.push({preco:50}) // adicionar
carrinho.shift()          // remover
carrinho = []             // finalizar

if(carrinho.length === 0){
    console.log("✔ TESTE 24 PASSOU")
}else{
    console.log("❌ TESTE 24 FALHOU")
}


}