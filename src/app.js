let clientes=[]
let pets=[]
let produtos=[]
let carrinho=[]


// CLIENTE

function criarCliente(){

let nome=clienteNome.value
let email=clienteEmail.value
let vip=clienteVip.checked

/*
Professor, analisando essa parte do código percebi que
era necessário validar o nome do cliente.

Se o nome estivesse vazio o sistema ainda poderia tentar
cadastrar o cliente, o que não faz sentido para o sistema.

Por isso concluí que deveria verificar se o campo está vazio
antes de adicionar o cliente ao array.
*/

if(nome==""){
alert("Nome inválido")
return
}

/*
também percebi que o email precisava de uma validação
mínima para garantir que fosse um email válido.

No meu entendimento, verificar se contém o símbolo "@"
já ajuda a evitar erros básicos de cadastro.
*/

if(!email.includes("@")){
alert("Email inválido")
return
}

clientes.push({nome,email,vip})

renderClientes()

}

function renderClientes(){

listaClientes.innerHTML=""

clientes.forEach(c=>{
let li=document.createElement("li")
li.innerText=c.nome+" - "+c.email
listaClientes.appendChild(li)
})

}


// PET

function cadastrarPet(){

let nome=petNome.value
let tipo=petTipo.value
let idade=parseInt(petIdade.value)

/*
Professor, notei que no meu entendimento essa parte do código
não validava corretamente os dados do pet.

Primeiro verifiquei que o nome precisava ser obrigatório,
pois não faz sentido cadastrar um pet sem nome.
*/

if(nome==""){
alert("Pet precisa de nome")
return
}

/*
Também percebi que o tipo do pet deveria ser validado,
pois o sistema poderia receber um campo vazio.
*/

if(tipo==""){
alert("Pet precisa de tipo")
return
}

/*
Professor, aqui eu percebi um problema importante.

O código original apenas usava parseInt para converter
a idade, mas não verificava se o valor realmente era
um número válido.

Isso poderia permitir cadastrar um pet com idade
em branco ou com letras.

Por isso concluí que usar isNaN() seria uma forma
mais segura de validar a idade.
*/

if(isNaN(idade)){
alert("Idade inválida")
return
}

pets.push({nome,tipo,idade})

renderPets()

}

function renderPets(){

listaPets.innerHTML=""

pets.forEach(p=>{
let li=document.createElement("li")
li.innerText=p.nome+" ("+p.tipo+")"
listaPets.appendChild(li)
})

}


// PRODUTOS

function criarProduto(){

let nome=produtoNome.value
let preco=parseFloat(produtoPreco.value)

/*
Professor, analisando o funcionamento do sistema
percebi que o código original permitia criar produtos
sem nome.

Isso acontece porque não havia nenhuma validação
para verificar se o campo de nome estava vazio.

No meu entendimento isso poderia causar problemas
na identificação dos produtos.

Por isso concluí que seria necessário validar
o nome antes de criar o produto.
*/

if(nome==""){
alert("Produto precisa de nome")
return
}

/*
também percebi que o preço precisava
de uma validação mais segura.

O código original verificava apenas se o preço
era menor que zero.

Mas ainda permitiria valores inválidos como
letras ou campos vazios.

Por isso concluí que deveria usar isNaN()
e também impedir preços menores ou iguais a zero.
*/

if(isNaN(preco) || preco<=0){
alert("Preço inválido")
return
}

produtos.push({nome,preco})

renderProdutos()

}

function renderProdutos(){

listaProdutos.innerHTML=""
produtoSelect.innerHTML=""

produtos.forEach((p,i)=>{

let li=document.createElement("li")
li.innerText=p.nome+" - R$ "+p.preco
listaProdutos.appendChild(li)

let op=document.createElement("option")
op.value=i
op.innerText=p.nome
produtoSelect.appendChild(op)

})

}


// CARRINHO

function adicionarCarrinho(){

let p=produtos[produtoSelect.value]

/*
Professor, durante a análise percebi que o sistema
poderia tentar adicionar um produto inexistente
no carrinho.

Isso poderia acontecer se nenhum produto estivesse
selecionado no select.

Nesse caso a variável p ficaria undefined.

No meu entendimento isso poderia causar erros
no carrinho e no cálculo do total.

Por isso concluí que deveria verificar se o
produto realmente existe antes de adicioná-lo.
*/

if(!p){
alert("Selecione um produto")
return
}

carrinho.push(p)

renderCarrinho()

}

function removerCarrinho(){

/*
aqui também percebi que o sistema
poderia tentar remover um item do carrinho
mesmo quando ele estivesse vazio.

Isso não quebraria o sistema, mas não é
um comportamento correto.

Por isso incluí uma verificação para garantir
que o carrinho tenha itens antes de remover.
*/

if(carrinho.length==0){
return
}

carrinho.shift()

renderCarrinho()

}

function renderCarrinho(){

listaCarrinho.innerHTML=""

carrinho.forEach(p=>{

let li=document.createElement("li")
li.innerText=p.nome+" - "+p.preco
listaCarrinho.appendChild(li)

})

calcularTotal()

}


// TOTAL

function calcularTotal(){

let total=0

carrinho.forEach(p=>{

total+=p.preco

})

/*
Professor, aqui implementei uma regra de negócio
para dar desconto quando o total da compra
ultrapassa 100 reais.
*/

if(total>100){
total*=0.9
}

/*
percebi que o método toFixed(2)
transforma o número em texto (string).

Isso poderia causar problemas em cálculos
ou testes automatizados.

Por isso concluí que seria melhor converter
novamente para número usando parseFloat.
*/

total=parseFloat(total.toFixed(2))

document.getElementById("total").innerText=total

return total

}


// FINALIZAR

function finalizarCompra(){

alert("Compra finalizada: "+calcularTotal())

carrinho=[]

renderCarrinho()

}


// CARROSSEL

let slideIndex = 0

function nextSlide(){
slideIndex++
updateSlide()
}

function prevSlide(){
slideIndex--
updateSlide()
}

function updateSlide(){

const slides = document.querySelector(".slides")
const total = document.querySelectorAll(".slide").length

if(slideIndex >= total) slideIndex = 0
if(slideIndex < 0) slideIndex = total - 1

slides.style.transform = "translateX(-" + slideIndex * 100 + "%)"

}

setInterval(nextSlide,4000)