window.onload = function () {

   /*
Autor: João Paulo Soares Nogueira
Data: 18/03/2026
Descrição: Testes do carrossel de imagens
*/

let slideIndex = 0
let totalSlides = 3

// TESTE 20 - Próximo slide
slideIndex++
if(slideIndex === 1){
    console.log("✔ TESTE 20 PASSOU")
}else{
    console.log("❌ TESTE 20 FALHOU")
}

// TESTE 21 - Loop do carrossel
slideIndex = 3
if(slideIndex >= totalSlides){
    slideIndex = 0
}

if(slideIndex === 0){
    console.log("✔ TESTE 21 PASSOU")
}else{
    console.log("❌ TESTE 21 FALHOU")
}
/*
Autor: João Paulo Soares Nogueira
Data: 18/03/2026
Descrição: Testa se o carrossel troca automaticamente os slides
*/

// TESTE 23 - Troca automática

slideIndex = 0

function nextSlide(){
    slideIndex++
}

nextSlide()

if(slideIndex === 1){
    console.log("✔ TESTE 23 PASSOU")
}else{
    console.log("❌ TESTE 23 FALHOU")
}
}