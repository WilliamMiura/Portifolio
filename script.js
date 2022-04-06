var hamburguer = document.querySelector(".hamburguer");//document para procurar e query selector para selecionar//

hamburguer.addEventListener("click", function(){
//quando executar o evento de click vai chamar a função://
    document.querySelector(".container").classList.toggle("show");
});
//*container engloba toda a pagina