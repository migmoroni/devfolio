// Carousel phrases
let currentPhraseIndex = 0;

function changeCarouselPhrase() {
    const phrasesL = ['//JavaScript', '#Ruby', '#Python', '//C#'];
    const phrasesC = ['console.log("Bem vindo!")', 'puts "Bem vindo!"', 'print "Bem vindo!"', 'Console.WriteLine("Bem vindo!")'];
    let carouselItem = document.getElementById("carousel-item");
    let carouselItem2 = document.getElementById("carousel-item2");

    carouselItem.innerHTML = phrasesL[currentPhraseIndex];
    currentPhraseIndex = (currentPhraseIndex + 0) % phrasesL.length;

    carouselItem2.innerHTML = phrasesC[currentPhraseIndex];
    currentPhraseIndex = (currentPhraseIndex + 1) % phrasesC.length;
}

// Night Mode
var boo = false;
var elemento = document.getElementById("botaoCE");


function nightMode() {
    element1 = document.getElementById("header");
    element2 = document.getElementById("hab");
    element3 = document.getElementById("carousel");
    element4 = document.getElementById("pro");
    element5 = document.getElementById("con");

    //const classElement = ["header", "hab", "carousel", "pro", "con"];
    //const classElementAdd = ["header-night", "hab-night", "pro-night", "con-night"]

    boo = !boo;

    if (boo) {
        elemento.textContent = "CLARO";
        document.body.style.backgroundColor = "black";
        element1.classList.add("header-night");
        element2.classList.add("hab-night");
        element3.classList.add("carousel-night");
        element4.classList.add("pro-night");
        element5.classList.add("con-night");
    } else {
        elemento.textContent = "ESCURO";
        document.body.style.backgroundColor = "white";
        element1.classList.remove("header-night");
        element2.classList.remove("hab-night");
        element3.classList.remove("carousel-night");
        element4.classList.remove("pro-night");
        element5.classList.remove("con-night");
    }
}


setInterval(changeCarouselPhrase, 1500);