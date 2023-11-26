// Il tuo compito è creare un sito e-commerce per Smartphones. 
// L'homepage che stai per creare sarà la vetrina dei prodotti disponibili, con qualche informazione per ciascun prodotto. 
// Non sono richieste funzionalità di carrello/cassa.
// - Completa gli esercizi dall'1 al 6 SOLAMENTE con HTML
// - Completa gli altri esercizi con JS

//ESERCIZI IN HTML

// ESERCIZIO 1: Inserisci un tag h1 con il nome del tuo negozio
// ESERCIZIO 2: Aggiungi una tabella con i 5 prodotti più in vista del tuo negozio
// ESERCIZIO 3: Aggiungi per ogni prodotto un'immagine, un titolo, una descrizione e un prezzo
// ESERCIZIO 4: Per ogni elemento della tabella aggiungi un link di Amazon al prodotto esistente
// ESERCIZIO 5: Aggiungi un footer con il nome e l'indirizzo del tuo negozio
// ESERCIZIO 6: Aggiungi un campo testuale in cui l'utente può lasciare un commento su un prodotto (al momento non serve inserire nessuna "vera" funzionalità di POST/salvataggio!)

//ESERCIZI IN JS
// ESERCIZIO 7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro v
// ESERCIZIO 8: Scrivi una funzione per cambiare il colore di background della pagina v
// ESERCIZIO 9: Scrivi una funzione per cambiare l'indirizzo presente nel footer in un altro, fittizio v
// ESERCIZIO 10: Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella v
// ESERCIZIO 11: Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella; questa classe deve modificare la visibilità/invisibilità dell'immagine
// ESERCIZIO 12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in uno differente, ogni volta che viene invocata

// es.7

function h1Modifie() {
    let newH1 = document.getElementsByTagName("h1")[0];
    newH1.innerText = "Sono cambiato!";
}
h1Modifie()

// es.8

function bodyColor() {
    let newBodyColor = document.getElementsByTagName("body")[0];
    newBodyColor.style.backgroundColor = "gray";
}
bodyColor()

// es.9

function addres() {
    let addres = document.getElementById("info");
    let newAddres = addres.children[1];
    newAddres.innerText = "via abete n";
}
addres()

// es.10

function addClass () {
    let newClass = document.getElementsByClassName("link");
    for (let i = 0; i < newClass.length; i++) {
        newClass[i].classList.add("new");
        
    }
}
addClass()

// es.11

function toggleClass () {
    let disappearsClass = document.getElementsByTagName("img");
    for (let img = 0; img < disappearsClass.length; img++) {
        disappearsClass[img].classList.toggle("disappear");
    }
}
toggleClass()
// funzione attiva per non far scomparire le immagini
toggleClass()

function imgSetDisplay () {
    let image = document.getElementsByClassName("disappear");
    for (let index = 0; index < image.length; index++) {
        image[index].style.display = "none"
    }
}

imgSetDisplay()

// es.12

function getRandomNumber (limitValue) {
    let randomNumber = Math.random();
    randomNumber = randomNumber*limitValue;
    randomNumber = Math.floor(randomNumber);
    return randomNumber;
}

function randomColorRefresh () {
    let limitNum = 256;
    let r = getRandomNumber(limitNum);
    let g = getRandomNumber(limitNum);
    let b = getRandomNumber(limitNum);
    return 'rgb('+r+','+g+','+b+')';
}
function changePriceColor () {
    let price = document.getElementsByClassName("price");
    for (let color = 0; color < price.length; color++) {
        price[color].style.color = randomColorRefresh();
    }
}
changePriceColor()