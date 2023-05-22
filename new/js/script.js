/*Funcao para modo claro e escuro*/



// Carousel phrases

let currentPhraseIndex = 0;


function changeCarouselPhrase() {
    let phrasesL = ['//JavaScript', '#Ruby', '#Python', '//C#'];
    let phrasesC = ['console.log("Bem vindo!")', 'puts "Bem vindo!"', 'print "Bem vindo!"', 'Console.WriteLine("Bem vindo!")'];
    let carouselItem = document.getElementById("carousel-item");
    let carouselItem2 = document.getElementById("carousel-item2");

    carouselItem.innerHTML = phrasesL[currentPhraseIndex];
    currentPhraseIndex = (currentPhraseIndex + 0) % phrasesL.length;

    carouselItem2.innerHTML = phrasesC[currentPhraseIndex];
    currentPhraseIndex = (currentPhraseIndex + 1) % phrasesC.length;
}

setInterval(changeCarouselPhrase, 1500);