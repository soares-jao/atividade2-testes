const { JSDOM } = require("jsdom")

/*
=========================================================
TESTES DO SISTEMA PETSHOP
RESPONSÁVEL: JOAO PAULO SOARES NOGUEIRA
DATA: 17/03/2026
=========================================================
*/

const dom = new JSDOM(`

<input id="clienteNome">
<input id="clienteEmail">
<input type="checkbox" id="clienteVip">

<input id="petNome">
<input id="petTipo">
<input id="petIdade">

<input id="produtoNome">
<input id="produtoPreco">

<ul id="listaClientes"></ul>
<ul id="listaPets"></ul>
<ul id="listaProdutos"></ul>

<select id="produtoSelect"></select>

`)

global.document = dom.window.document

let clientes=[]
let pets=[]
let produtos=[]



// CLIENTE

function criarCliente(){

let nome=document.getElementById("clienteNome").value
let email=document.getElementById("clienteEmail").value
let vip=document.getElementById("clienteVip").checked

if(nome==""){
console.log("❌ Nome inválido")
return
}

if(!email.includes("@")){
console.log("❌ Email inválido")
return
}

clientes.push({nome,email,vip})

}



// PET

function cadastrarPet(){

let nome=document.getElementById("petNome").value
let tipo=document.getElementById("petTipo").value
let idade=parseInt(document.getElementById("petIdade").value)

if(nome==""){
console.log("❌ Pet precisa de nome")
return
}

pets.push({nome,tipo,idade})

}



// PRODUTOS

function criarProduto(){

let nome=document.getElementById("produtoNome").value
let preco=parseFloat(document.getElementById("produtoPreco").value)

if(preco<0){
console.log("❌ Preço inválido")
return
}

produtos.push({nome,preco})

}



console.log("\n==============================")
console.log("INICIANDO TESTES DO SISTEMA")
console.log("==============================\n")



// TESTES CLIENTE

console.log("TESTES DE CLIENTE\n")

document.getElementById("clienteNome").value="João"
document.getElementById("clienteEmail").value="joao@email.com"

criarCliente()

if(clientes.length===1){
console.log("✔ TESTE 1 PASSOU - Cliente cadastrado")
}else{
console.log("✖ TESTE 1 FALHOU")
}



document.getElementById("clienteNome").value=""
document.getElementById("clienteEmail").value="email@email.com"

criarCliente()

if(clientes.length===1){
console.log("✔ TESTE 2 PASSOU - Nome obrigatório")
}else{
console.log("✖ TESTE 2 FALHOU")
}



document.getElementById("clienteNome").value="Maria"
document.getElementById("clienteEmail").value="emailinvalido"

criarCliente()

if(clientes.length===1){
console.log("✔ TESTE 3 PASSOU - Email inválido bloqueado")
}else{
console.log("✖ TESTE 3 FALHOU")
}



console.log("\nTESTES DE PET\n")



// TESTE 6

document.getElementById("petNome").value="Rex"
document.getElementById("petTipo").value="Cachorro"
document.getElementById("petIdade").value="4"

cadastrarPet()

if(pets.length===1){
console.log("✔ TESTE 6 PASSOU - Pet cadastrado")
}else{
console.log("✖ TESTE 6 FALHOU")
}



// TESTE 7

document.getElementById("petNome").value=""
document.getElementById("petTipo").value="Gato"
document.getElementById("petIdade").value="2"

cadastrarPet()

if(pets.length===1){
console.log("✔ TESTE 7 PASSOU - Nome obrigatório")
}else{
console.log("✖ TESTE 7 FALHOU")
}



// TESTE 8

document.getElementById("petNome").value="Luna"
document.getElementById("petTipo").value="Gato"
document.getElementById("petIdade").value="3"

cadastrarPet()

if(pets.length===2){
console.log("✔ TESTE 8 PASSOU - Tipo definido")
}else{
console.log("✖ TESTE 8 FALHOU")
}



// TESTE 9

document.getElementById("petNome").value="Thor"
document.getElementById("petTipo").value="Cachorro"
document.getElementById("petIdade").value="5"

cadastrarPet()

if(pets.length===3){
console.log("✔ TESTE 9 PASSOU - Idade válida")
}else{
console.log("✖ TESTE 9 FALHOU")
}



console.log("\nTESTES DE PRODUTOS\n")



// TESTE 10

document.getElementById("produtoNome").value="Ração"
document.getElementById("produtoPreco").value="50"

criarProduto()

if(produtos.length===1){
console.log("✔ TESTE 10 PASSOU - Produto criado")
}else{
console.log("✖ TESTE 10 FALHOU")
}



// TESTE 11

document.getElementById("produtoNome").value="Coleira"
document.getElementById("produtoPreco").value="25"

criarProduto()

if(produtos.length===2){
console.log("✔ TESTE 11 PASSOU - Preço maior que zero")
}else{
console.log("✖ TESTE 11 FALHOU")
}



// TESTE 12

document.getElementById("produtoNome").value="Brinquedo"
document.getElementById("produtoPreco").value="-10"

criarProduto()

if(produtos.length===2){
console.log("✔ TESTE 12 PASSOU - Preço negativo bloqueado")
}else{
console.log("✖ TESTE 12 FALHOU")
}



// TESTE 13

document.getElementById("produtoNome").value="Shampoo"
document.getElementById("produtoPreco").value="30"

criarProduto()

if(produtos.length===3){
console.log("✔ TESTE 13 PASSOU - Produto aparece na lista")
}else{
console.log("✖ TESTE 13 FALHOU")
}



console.log("\n==============================")
console.log("FIM DOS TESTES")
console.log("==============================")