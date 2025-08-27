let menuMobile = document.querySelector("#menu-mobile")
let ListaMenu = document.querySelector("#listaItens")

function chamarMenuMobile(){

    if(menuMobile.classList.contains("nav-hamburguer-fechado")){
        menuMobile.classList.remove("nav-hamburguer-fechado")
        ListaMenu.classList.remove("itensFechado")
        menuMobile.classList.add("nav-hamburguer-aberto")
        ListaMenu.classList.add("itensAberto")
    }else{
        menuMobile.classList.remove("nav-hamburguer-aberto")
        ListaMenu.classList.remove("itensAberto")
        menuMobile.classList.add("nav-hamburguer-fechado")   
        ListaMenu.classList.add("itensFechado")    
    }

}

function clicoufechou(){
    menuMobile.classList.remove("nav-hamburguer-aberto")
    ListaMenu.classList.remove("itensAberto")
    menuMobile.classList.add("nav-hamburguer-fechado")   
    ListaMenu.classList.add("itensFechado")   
}


document.querySelector("#menu-mobile").addEventListener('click', chamarMenuMobile);


document.querySelector("#cliqueMobile1").addEventListener('click',clicoufechou);
document.querySelector("#cliqueMobile2").addEventListener('click',clicoufechou);
document.querySelector("#cliqueMobile3").addEventListener('click',clicoufechou);
document.querySelector("#cliqueMobile4").addEventListener('click',clicoufechou);
document.querySelector("#cliqueMobile5").addEventListener('click',clicoufechou);
document.querySelector("#cliqueMobile6").addEventListener('click',clicoufechou);
document.querySelector("#cliqueMobile7").addEventListener('click',clicoufechou);