let numbers = [];
let tot = 0;

let contatore = 0;
while (contatore < 3) {
  let userNumber = parseInt(prompt(`Inserisci il ${contatore + 1}° numero pari`));

  if (isNaN(userNumber) || userNumber % 2 !== 0) {
    alert('Attenzione! Devi inserire un numero pari.');
  } else {
    numbers.push(userNumber);
    tot += userNumber;
    contatore++;
  }
}

console.log('Numeri inseriti:', numbers);
console.log('Somma:', tot);