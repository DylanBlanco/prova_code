document.getElementById('text').innerHTML='Hello World!';

// con writeln il testo va a finire sempre alla fine del body
// document.writeln('<h1>Hello World</h1>')

// let who = prompt('come ti chiami?');
let who = 'dylan';
console.log('hai scritto', who);
document.getElementById('nome').innerHTML = who;

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


// const numero = 3;
// let numUno = prompt('inserisci primo numero')
// let numDue = prompt('inserisci secondo nunmero');
// if (numDue > numero) {
//     console.log(numDue, 'è maggiore di', numero);
// }
// else if (numDue < numero) {
//     console.log(numDue, 'è minore di', numero)
// }
// else if (numDue == numero) {
//     console.log(numDue, 'è uguale a', numero);
// }
// else {
//     console.log('non è un numero');
// }

// if (numUno && numDue == numero) {
//     console.log('hai vinto');
// }
// else if (numUno || numDue != numero) {
//     console.log('avete inserito', numUno, 'e', numDue, ', ci siete quasi');
// }
// else {
//     console.log('hai perso');
// }

// date, in cso di dubbio\ https://www.w3schools.com/js/js_date_methods.asp
const now = new Date();
console.log(now);
const a = new Date("2021-03-25")
document.getElementById("demo").innerHTML = a.getFullYear();
const b = new Date()
document.getElementById("demo").innerHTML = b.getFullYear();

// numeor random\ https://www.w3schools.com/js/js_random.asp
document.getElementById('numRandom').innerHTML = Math.random(); // restituisce num tra 0 e 1

// Math.floor, arrotonda per difetto \ Math.ceil, arrotonda per eccesso
document.getElementById('numRandom').innerHTML = Math.floor(Math.random() * 10 + 1); //num tra 0 e 10
console.log('num tra 1 e 10 è:', numRandom);

// style css con js \ SELETTORI
const red = document.getElementById('esStyle'); // possono prendere un solo elemento dall'alto
console.log('Red text;', red, typeof red);
red.innerHTML = 'Testo rosso';
red.style.color = "red";

const grey = document.querySelector('#esGrey'); // possono prendere un solo elemento dall'alto
console.log('Grey text;', grey, typeof grey);
grey.innerHTML = 'Testo Grigio';
grey.style.color = "grey";

document.getElementsByTagName('div'); // prendono più elementi
document.getElementsByClassName('div'); // prendono più elementi
document.querySelectorAll('div'); // prendono più elementi

console.log('questa è la mia selezione:', grey.classList, typeof grey.classList);

grey.className += ' border-primary rounded'; // ricorda lo spazio dopo l'apice
grey.style.backgroundColor = 'black';
grey.innerHTML += ' !aggiunto!';

// grey.addEventListener(evento da intercettare, cosa fare quando si verifica l'evento
grey.addEventListener('click', function() {
    // grey.style.backgroundColor = 'yellow';
    // grey.style.color = 'red';
    grey.className = 'border border-danger rounded bg-success    text-warning';
    grey.innerHTML = 'hai fatto Click'
});

// funzione che intercetta il click sul bottono (sbagliato in questo caso)
// const submitButton = document.getElementById('submit-button');
// submitButton.addEventListener("click", function() {
//     const nomeInput = document.getElementById('name');
//     console.log('hai inserito:', nomeInput, typeof nomeInput);
//     console.log('value:', nomeInput.value, typeof nomeInput.value);

//     const etaInput = document.getElementById('age');
//     console.log('value:', etaInput.vaule);
// });

// funzione che intercetta la sottomissione del form
const selectForm = document.querySelector('form');
selectForm.addEventListener("submit", function(event) {
    event.preventDefault(); // previene il comportamento di default
    const nomeInput = document.getElementById('name');
    console.log('hai inserito:', nomeInput, typeof nomeInput);
    console.log('value:', nomeInput.value, typeof nomeInput.value);
    
    const etaInput = document.getElementById('age');
    console.log('value:', etaInput);
    
    const jsQuad = document.querySelector(' .quadJs');
    jsQuad.classList.add('bg-danger');
});