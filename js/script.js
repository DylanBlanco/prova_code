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

let newName = prompt('Come ti chiami?');
console.log(newName);

if(newName = true) {
    document.getElementById('nome').innerHTML=newName;
}
else {
    document.getElementById('nome').innerHTML='Questa non è una stringa';
};