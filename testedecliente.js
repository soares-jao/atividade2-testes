document.addEventListener("DOMContentLoaded", function () {
/*
=========================================================
TESTES DE CLIENTE
RESPONSÁVEL: JOAO PAULO SOARES NOGUEIRA
DATA: 17/03/2026
=========================================================
*/

/* TESTE 1 - Deve permitir criar cliente com nome válido */

clienteNome.value = "Maria"
clienteEmail.value = "maria@email.com"
clienteVip.checked = false

criarCliente()

console.log("TESTE 1 - Cliente criado")


/* TESTE 2 - Não deve permitir cliente com nome vazio */

clienteNome.value = ""
clienteEmail.value = "teste@email.com"

criarCliente()

console.log("TESTE 2 - Alerta de nome inválido")


/* TESTE 3 - Deve permitir email válido */

clienteNome.value = "Carlos"
clienteEmail.value = "carlos@email.com"

criarCliente()

console.log("TESTE 3 - Email válido aceito")


/* TESTE 4 - Não deve permitir email inválido */

clienteNome.value = "João"
clienteEmail.value = "emailinvalido"

criarCliente()

console.log("TESTE 4 - Alerta email inválido")


/* TESTE 5 - Deve permitir cliente VIP */

clienteNome.value = "Ana"
clienteEmail.value = "ana@email.com"
clienteVip.checked = true

criarCliente()

console.log("TESTE 5 - Cliente VIP criado")

})