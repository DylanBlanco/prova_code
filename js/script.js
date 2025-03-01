document.getElementById('text').innerHTML='Hello World!';

// con writeln il testo si inserisce sempre alla fine del body
document.writeln('<h1>Hello World</h1>')

let nomeUno = 'Dylan';
console.log(nomeUno);

let text = 'si esercita';
console.log(text);

let newVar = nomeUno + ' ' + text;
console.log(newVar);

// let msg = 'ciao a tutti';
// alert(msg);

// msg = 'di nuovo ciao';
// alert(msg);

console.log(
    `
    ${nomeUno} ${text}
    con js
    `
);

let somma = 10+4;
console.log(somma);


const numero = 3;
let numUno = prompt('inserisci primo numero')
let numDue = prompt('inserisci secondo nunmero');
// if (numDue > numero) {
//     console.log(numDue, 'è maggiore di', numero);
// }
// else if (numDue < numero) {
//     console.log(numDue, 'è minore di', numero)
// }
// else if (numDue == numero) {
//     console.log(numDue, 'è pari a', numero);
// }
// else {
//     console.log('non è un numero');
// }
if (numUno && numDue == numero) {
    console.log('hai vinto');
}
else if (numUno == numero && numDue != numero) {
    console.log('avete inserito', numUno, 'e', numDue, ', ci siete quasi');
}
else {
    console.log('hai perso');
}