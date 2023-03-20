
const età = prompt('Inserisci la tua età');
const km = prompt('Quanti km percorrerai?');

let etàMin = 0;
let etàMax = 100;
let bigliettoBase = 0.21 * km;
console.log('Prezzo base del biglietto €', bigliettoBase);

let scotoGiovani = (bigliettoBase * 20) / 100;
let scontoAnziani = (bigliettoBase * 40) / 100;

let PrezzoGiovani = bigliettoBase - scotoGiovani;

let prezzoAnzini = bigliettoBase - scontoAnziani;


console.log('Sconto applicato al biglietto minorenni €', scotoGiovani);
console.log('Sconto applicato al biglietto anziani €', scontoAnziani);

if (ageUser < 18) {
  document.getElementById('biglietto').innerHTML = 'Prezzo finale €' + Math.round(PrezzoGiovani);
} else if (ageUser > 65){
  document.getElementById('biglietto').innerHTML = 'Prezzo finale €' + Math.round(prezzoAnzini);
}

document.getElementById('ticket').innerHTML = 'Prezzo finale €' + Math.round(bigliettoBase);

