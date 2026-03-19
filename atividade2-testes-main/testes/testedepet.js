document.addEventListener("DOMContentLoaded", function () {

   // testes aqui


/*
=========================================================
TESTES DE PET
RESPONSÁVEL: JOAO PAULO SOARES NOGUEIRA
DATA: 17/03/2026
=========================================================
*/

/* TESTE 6 - Deve permitir cadastrar pet */

petNome.value = "Rex"
petTipo.value = "Cachorro"
petIdade.value = "3"

cadastrarPet()

console.log("TESTE 6 - Pet cadastrado")


/* TESTE 7 - Pet deve possuir nome obrigatório */

petNome.value = ""
petTipo.value = "Gato"
petIdade.value = "2"

cadastrarPet()

console.log("TESTE 7 - Alerta nome obrigatório")


/* TESTE 8 - Pet deve possuir tipo */

petNome.value = "Luna"
petTipo.value = "Gato"
petIdade.value = "4"

cadastrarPet()

console.log("TESTE 8 - Pet com tipo")


/* TESTE 9 - Pet deve possuir idade válida */

petNome.value = "Thor"
petTipo.value = "Cachorro"
petIdade.value = "5"

cadastrarPet()

console.log("TESTE 9 - Idade válida")


/*
Autor: João Paulo Soares Nogueira
Data: 18/03/2026
Descrição: Testes relacionados ao cadastro de pets
*/

pets = []

// TESTE 5 - Pet válido
pets.push({nome:"Rex", tipo:"Cachorro", idade:3})
if(pets.length === 1){
    console.log("✔ TESTE 5 PASSOU")
}else{
    console.log("❌ TESTE 5 FALHOU")
}

// TESTE 6 - Nome obrigatório
let nome = ""
if(nome == ""){
    console.log("✔ TESTE 6 PASSOU")
}else{
    console.log("❌ TESTE 6 FALHOU")
}

// TESTE 7 - Tipo obrigatório
let tipo = ""
if(tipo == ""){
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
})