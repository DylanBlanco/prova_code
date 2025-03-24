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
    grey.innerHTML = 'hai fatto Click';
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

const btnLess = document.querySelector(' .quadRed');
btnLess.addEventListener('click', function() {
    if (red.classList.contains('background-color')) {
        red.classList.remove('background-color');
    }
    else{
        red.classList.add('background-color');

    }
})

const jsButton = document.querySelector('.js-button');
jsButton.className = 'btn btn-success border shadow-lg';
jsButton.classList.add('border-dark');

const jsFunClick = document.querySelector('.js-function-click');
jsFunClick.className = 'd-none';

jsButton.addEventListener('click', function() {
    if (jsFunClick.classList.contains('d-none')) {
        jsFunClick.classList.remove('d-none');
    }
    else {
        const pNone = document.getElementById('p-none');
        pNone.innerHTML = 'Hai già cliccato!';
    }
});

// GENERA 5NUM CASUALI
// const quadjsfor = document.querySelector('.quad-js-for');
// quadjsfor.className = 'bg-secondary-subtle';
// const jsButtonFor = document.getElementById('js-button-for');
// jsButtonFor.className = 'btn btn-dark';

// jsButtonFor.addEventListener('click', function() {
//     let randomNumJs = document.getElementById('random-num-js');
//     for (let i=1; i<6; i++) {
//         let randomNumJs = Math.floor(Math.random() * 10);
//         console.log('numRandom dall 1 al 10:',randomNumJs, typeof randomNumJs);
//         let randomNumList = document.getElementById('random-num-list');
//         const element = `<p> ${randomNumJs} </p> <hr>`;
//         // const element = '<p>' + (randomNumJs) + '</p>' + '<hr>';
//         // randomNumList.innerHTML += '<p>' + (randomNumJs) + '</p>' + '<hr>';
//         randomNumList.innerHTML += element;
//     };
// });

// OPPURE usandO il ciclo while
// jsButtonFor.addEventListener('click', function() {
//     let randomNumJs = document.getElementById('random-num-js');
//     let i = 1;
//     while (i < 6) {
//         let randomNumJs = Math.floor(Math.random() * 10);
//         console.log('numRandom dall 1 al 10:', randomNumJs, typeof randomNumJs);
//         let randomNumList = document.getElementById('random-num-list');
//         randomNumList.innerHTML += '<p>' + randomNumJs + '</p>' + '<hr>';
//         i++;
//     }
// });


// GENERA 5 NUMERI CASUALI E DIVERSI TRA LORO
const quadjsfor = document.querySelector('.quad-js-for');
quadjsfor.className = 'bg-secondary-subtle';
const jsButtonFor = document.getElementById('js-button-for');
jsButtonFor.className = 'btn btn-dark';

jsButtonFor.addEventListener('click', function() {
    let randomNumList = document.getElementById('random-num-list');
    randomNumList.innerHTML = ''; // Svuota la lista prima di generare nuovi numeri
    let generatedNumbers = new Set(); // Crea un Set per memorizzare i numeri generati ed evitare duplicati
    
    while (generatedNumbers.size < 5) { // Continua a generare numeri finché il Set non contiene 5 numeri unici
        // Creazione di un numero casuale e verifica dell'unicità
        let randomNum = Math.floor(Math.random() * 10);
        if (!generatedNumbers.has(randomNum)) {  // Controlla se il numero è già presente nel Set
            generatedNumbers.add(randomNum);  // Se il numero non è già stato generato, lo aggiunge al Set
            console.log('numRandom dall 1 al 10:', randomNum, typeof randomNum);
            randomNumList.innerHTML += '<p>' + randomNum + '</p>' + '<hr>';
        }
    }
});

// ARRAY
const carListElement = document.querySelector('.car-list-element');
const carListImg = [
    'img/Fiat_500.jpeg',
    'img/opel_corsa.webp',
    'img/Peugeot_208.webp',
    'img/tesla-model-y.jpg'
];

for (let i = 0; i < carListImg.length ; i++) {
    console.log(carListImg[i]);
    if (i == 0) {
        carListElement.innerHTML += `<img src="${carListImg[i]}" class="active">`;
    }
    else {
        carListElement.innerHTML += `<img src="${carListImg[i]}">`;
    }
};

allImgs = document.querySelectorAll('.car-list-element > img');  // querySelectorAll - seleziona tutti gli elementi e li trasforma in un array
console.log(allImgs, typeof allImgs);

// let currentImgActive = 1;
/*
const buttonNext = document.getElementById('button-next');
    buttonNext.addEventListener('click', function() {
        // if (currentImgActive < carListImg.length) {
            allImgs[currentImgActive].classList.remove('active');
        if (currentImgActive < carListImg.length - 1) {
            // document.querySelector('.car-list-element > img:nth-child('+ currentImgActive +')').classList.remove('active');
            // allImgs[currentImgActive].classList.remove('active');
            currentImgActive++;
            // document.querySelector('.car-list-element > img:nth-child('+ currentImgActive +')').classList.add('active');
            // allImgs[currentImgActive].classList.add('active');
        }
        else {
            // allImgs[currentImgActive].classList.remove('active');
            currentImgActive = 0;
            // allImgs[currentImgActive].classList.add('active');
        }
        allImgs[currentImgActive].classList.add('active');
    });
    const buttonPrev = document.getElementById('button-prev');
    buttonPrev.addEventListener('click', function() {
        // if (currentImgActive > 1) {
            if (currentImgActive > 0) {
                // document.querySelector('.car-list-element > img:nth-child('+ currentImgActive +')').classList.remove('active');
            allImgs[currentImgActive].classList.remove('active');
            currentImgActive--;
            // document.querySelector('.car-list-element > img:nth-child('+ currentImgActive +')').classList.add('active');
            allImgs[currentImgActive].classList.add('active');
        }
        else {
            allImgs[currentImgActive].classList.remove('active');
            currentImgActive = carListImg.length - 1;
            allImgs[currentImgActive].classList.add('active');
        }
    });
*/

//  CODICE SEMPLIFICATO
let currentImgActive = 0;
const buttonNext = document.getElementById('button-next');
buttonNext.addEventListener('click', function() {
        allImgs[currentImgActive].classList.remove('active');
    if (currentImgActive < carListImg.length - 1) {
        currentImgActive++;
    }
    else {
        currentImgActive = 0;
    }
    allImgs[currentImgActive].classList.add('active');
});
const buttonPrev = document.getElementById('button-prev');
buttonPrev.addEventListener('click', function() {
    allImgs[currentImgActive].classList.remove('active');
        if (currentImgActive > 0) {
        currentImgActive--;
    }
    else {
        currentImgActive = carListImg.length - 1;
    }
    allImgs[currentImgActive].classList.add('active');
});

// //  CICLO WHILE
// let numGuess = parseInt(prompt('Inserisci il numero da indovinare da 1 a 10:'));
// console.log('hai inserito:', numGuess);
// while (isNaN(numGuess)) {
//     numGuess = parseInt(prompt('Valore non valido, iserisci un numero:'));
// };

// const randomNumGuess = Math.floor(Math.random() * 11);
// console.log('numrandom:', randomNumGuess);
// if (numGuess == randomNumGuess) {    
//     const winGuess = document.createElement('div');
//     winGuess.innerHTML = `
//     <h3>Hai inserito:</h3>
//     <p>${numGuess}</p>
//     <h3>Indovinato. Hai Vinto!!!</h3>
//     `;
//     document.getElementById('create-p').append(winGuess);
// }
// else {
//     const winGuess = document.createElement('div');
//     winGuess.innerHTML = `
//     <h3>Hai inserito:</h3>
//     <p>${numGuess}</p>
//     <h3>Non hai Indovinato. Hai Perso!</h3>
//     `;
//     document.getElementById('create-p').append(winGuess);
// };

// //  JS SWITCH

// const usrePosition = parseInt(prompt('In che posizione sei arriavto?'))
// switch(usrePosition) {
//     case 1:
//         alert('Sei arriavto primo');
//         break;
//     case 2:
//         alert('Sei arriavto secondo');
//         break;
//     case 3:
//         alert('Sei arriavto terzo');
//         break;
//     default:
//         alert('Sei arriavto in posizione:' + usrePosition);
//         break;
// };

// JS FUNCTION

const calcJs = document.getElementById('calc-js');
calcJs.innerHTML = `
    <div class="mb-3">
        <h4>
            Inserisci i numeri da calcolare
        </h4>
    </div>
    <form class="somma-form mb-2">
        <div class="input-group mb-2">
            <span class="input-group-text">Calcola</span>
            <input type="number" id="num-uno" name="numUno" class="form-control">
            <input type="number" id="num-due" name="numDue" class="form-control">
        </div>
        <div>
            <button type="submit" class="btn btn-primary">Somma</button>
        </div>
    </form>
    <div id="result-somma" class="bg-light-subtle shadow rounded"></div>
`;

const sommaForm = document.querySelector('.somma-form');
sommaForm.addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Ottieni i valori dagli input
    const numUno = document.getElementById('num-uno').value.trim();  // .TRIM - SERVE A EVITARE CAMPI VUOTI
    console.log('num uno:', numUno.value, typeof numUno.value);
    const numDue = document.getElementById('num-due').value.trim();  // .TRIM - SERVE A EVITARE CAMPI VUOTI
    console.log('num due:', numDue.value, typeof numDue.value);

    
    // Converte i valori in numeri
    const numero1 = Number(numUno);
    const numero2 = Number(numDue);
    

    
    // Esegui la somma
    const risultato = sommaNumeri(numero1, numero2);

   // Mostra il risultato
   document.getElementById('result-somma').innerHTML = `
        <div>
            <h3>Risultato: ${risultato}</h3>
        </div>
    `;
})

// Funzione per sommare due numeri
function sommaNumeri(numUno, numDue) {
    return numUno + numDue;
}

// // funzione che intercetta la sottomissione del form
// const selectForm = document.querySelector('form');
// selectForm.addEventListener("submit", function(event) {
//     event.preventDefault(); // previene il comportamento di default
//     const nomeInput = document.getElementById('name');
//     console.log('hai inserito:', nomeInput, typeof nomeInput);
//     console.log('value:', nomeInput.value, typeof nomeInput.value);

//     const etaInput = document.getElementById('age');
//     console.log('value:', etaInput);

//     const jsQuad = document.querySelector(' .quadJs');
//     jsQuad.classList.add('bg-danger');
// });