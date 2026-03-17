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
})