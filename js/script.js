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

const newName = prompt('Come ti chiami?');
console.log(newName);