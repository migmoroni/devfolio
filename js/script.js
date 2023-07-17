// Frases em Corrousel
let currentPhraseIndex = 0;

function changeCarouselPhrase() {
    const phrasesL = ['//JavaScript', '#Ruby', '//Java'];
    const phrasesC = ['console.log("Bem vindo!")', 'puts "Bem vindo!"', 'System.out.println("Bem vindo!")'];
    let carouselItem = document.getElementById("carousel-item");
    let carouselItem2 = document.getElementById("carousel-item2");

    carouselItem.innerHTML = phrasesL[currentPhraseIndex];
    currentPhraseIndex = (currentPhraseIndex + 0) % phrasesL.length;

    carouselItem2.innerHTML = phrasesC[currentPhraseIndex];
    currentPhraseIndex = (currentPhraseIndex + 1) % phrasesC.length;
}

// Modo Noturno
let boo = false;
let elemento = document.getElementById("botaoCE");


function nightMode() {
    const element1 = document.getElementById("header");
    const element2 = document.getElementById("hab");
    const element3 = document.getElementById("carousel");
    const element4 = document.getElementById("pro");
    const element5 = document.getElementById("con");

    const elementButton = document.getElementById("botaoCE");

    //const classElement = ["header", "hab", "carousel", "pro", "con"];
    //const classElementAdd = ["header-night", "hab-night", "pro-night", "con-night"]

    boo = !boo;

    if (boo) {
        elemento.textContent = "CLARO";
        elementButton.classList.remove("botaoCEC");
        elementButton.classList.add("botaoCEE");
        document.body.style.backgroundColor = "rgb(39, 37, 53)";
        element1.classList.add("header-night");
        element2.classList.add("hab-night");
        element3.classList.add("carousel-night");
        element4.classList.add("pro-night");
        element5.classList.add("con-night");
    } else {
        elemento.textContent = "ESCURO";
        elementButton.classList.remove("botaoCEE");
        elementButton.classList.add("botaoCEC");
        document.body.style.backgroundColor = "white";
        element1.classList.remove("header-night");
        element2.classList.remove("hab-night");
        element3.classList.remove("carousel-night");
        element4.classList.remove("pro-night");
        element5.classList.remove("con-night");
    }
}

function toggleMenu() {

    boo = !boo;
    let sanduicheMenu = document.querySelector('.sanduiche-menu');

    if (boo) {
        sanduicheMenu.classList.add('show');
    } else {
        sanduicheMenu.classList.remove('show');
    }

}
// Ver como resolver com .toggle()

setInterval(changeCarouselPhrase, 1500);

const sistemaOperacional = navigator.userAgent;
console.log("Sistema operacional: " + sistemaOperacional);