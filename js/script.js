let etàminima = 0;

let etàmassima = 100;


const kmPercorsi = prompt("quanti km devi percorrere?");

const etàPasseggero = prompt("quanti anni hai?");

console.log("etàPasseggero, kmPercorsi")

let bigliettoBase = 0,21€

console.log('Prezzo base del biglietto €', bigliettoBase);

let scontoGiovani = (bigliettoBase * 20) / 100;
let scontoAnziani = (bigliettoBase * 40) / 100;

let prezzo = bigliettoBase - scontoGiovani;

let prezzo = bigliettoBase - scontoAnziani;


console.log('Sconto applicato al biglietto €', scontoGiovani);
console.log('Sconto applicato al biglietto €', scontoAnziani);



