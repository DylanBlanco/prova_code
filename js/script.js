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

    
    // Controllo se i campi sono vuoti
    if (numUno === "" || numDue === "") {
        document.getElementById('result-somma').innerHTML = `
            <div class="text-danger">Inserisci entrambi i numeri!</div>
        `;
        return;
    }
    
    // Converte i valori in numeri
    const numero1 = Number(numUno);
    const numero2 = Number(numDue);
    
    // Controllo che siano effettivamente numeri
    if (isNaN(numero1) || isNaN(numero2)) {  // isNaN - Verifica che i valori siano numeri validi
        document.getElementById('result-somma').innerHTML = `
            <div class="text-danger">Inserisci solo numeri validi!</div>
        `;
        return;
    }

    
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
};

//  ARROW FUNCTION
const arrowFuncDiv =  document.getElementById('arrow-func-div');
arrowFuncDiv.innerHTML = `
    <h4>
        Vuoi cambiare colore?
    </h4>
    <select id="color-select" class="form-select mb-2">
        <option value="">-- Rimuovi colore --</option>
        <option value="bg-primary">Blu</option>
        <option value="bg-success">Verde</option>
        <option value="bg-danger">Rosso</option>
        <option value="bg-warning">Giallo</option>
        <option value="bg-info">Azzurro</option>
    </select>
    <button class="btn btn-success btn-change-color">Clicca qui</button>
`;

const btnColorChange = document.querySelector('.btn-change-color');
const colorSelect = document.getElementById('color-select');

btnColorChange.addEventListener("click", function() {
    colorDelete();  // Richiama Function colorDelete
    const selectedColor = colorSelect.value;  // Seleziona Valore(value) della Select
    
    // Se è stata selezionata una option aggiunge il Value corrispettivo
    if (selectedColor) {
        arrowFuncDiv.classList.add(selectedColor);
    };
});
// //  Color delete function
// function colorDelete() {
//     arrowFuncDiv.className = ''; // Cancella tutte le classi
//     arrowFuncDiv.classList.add('quad');
// };

// Color delete Arrow function
const colorDelete = () => {
    arrowFuncDiv.className = ''; // Rimuove tutte le classi
    arrowFuncDiv.classList.add('quad'); // Mantiene una classe di base
};

// TIMING FUNCTIONS

document.getElementById('async-div').innerHTML = `
    <h5>
        Qui c'è un messaggio Asincrono:
    </h5>
`;

//  SetTimeout -- Esegue una sola volta dopo un ritardo

setTimeout(msgAsync, 5000);

// Function con appendChild
function msgAsync() {
    const container = document.getElementById('async-div');
    const newDiv = document.createElement('div'); // Crea un nuovo <div>
    newDiv.classList.add('nuovo-div'); // Aggiunge una classe
    newDiv.textContent = 'Questo è un messaggio asincrono, setTimeout'; // Aggiunge testo

    container.appendChild(newDiv); // Aggiunge il div dentro #contenitore
};

// SetInterval -- Esegue più volte a intervalli regolari

const platformVid = [
    './img/ntflx.jpg',
    './img/prime.png',
    './img/disney+.png',
    './img/crunchyroll.png',
];
const carouselBoxImg = document.querySelector('.carousel-box-img');

// Creazione delle immagini nel carousel
for (let i = 0; i < platformVid.length ; i++) {
    console.log(platformVid[i]);
    if (i == 0) {
        carouselBoxImg.innerHTML += `<img src="${platformVid[i]}" class="active">`;
    }
    else {
        carouselBoxImg.innerHTML += `<img src="${platformVid[i]}">`;
    }
};

// Avvia il carosello con intervallo di 1.5 secondi
const intervalId  = setInterval(() => {
    platformVidCarousel();
}, 1500);
// setInterval(platformVidCarousel, 1500);

// Interruzione del setInterval dopo 12 secondi
setTimeout(() => {
    clearInterval(intervalId); // Ferma l'intervallo dopo 12 secondi
    console.log("Carosello platformVidCarousel Interrotto!");
}, 12000);

let platformVidActive = 0;  // Variabile globale per tracciare l'immagine attiva
function platformVidCarousel() {
    const allImgCarouselBoxImg = document.querySelectorAll('.carousel-box-img > img');

    // Rimuove la classe active dall'immagine corrente
    allImgCarouselBoxImg[platformVidActive].classList.remove('active');

    // Cambia l'immagine attiva
    if (platformVidActive < platformVid.length - 1) {
        platformVidActive++;
    } else {
        platformVidActive = 0;
    }

    // Aggiunge la classe active alla nuova immagine attiva
    allImgCarouselBoxImg[platformVidActive].classList.add('active');
};

// FOREACH - è usato per iterare e modificare variabili esterne
const classes = [
    {
      className: "Classe A",
      students: [
        { name: "Luca", age: 15 },
        { name: "Giulia", age: 14 },
        { name: "Marco", age: 15 }
      ]
    },
    {
      className: "Classe B",
      students: [
        { name: "Sara", age: 16 },
        { name: "Davide", age: 17 },
        { name: "Elena", age: 16 },
        { name: "Antonio", age: 17 }
      ]
    },
    {
      className: "Classe C",
      students: [
        { name: "Francesca", age: 18 },
        { name: "Matteo", age: 17 },
        { name: "Alessia", age: 18 },
        { name: "Giorgio", age: 17 },
        { name: "Martina", age: 18 }
      ]
    }
];

const arrayClassi = document.getElementById('array-classi');
//  ForEach 
classes.forEach((cls) => {
    let studentList = "";
    cls.students.forEach((student) => {
        studentList += `
            <div class="d-flex justify-content-between">
                <div><strong>Nome:</strong> ${student.name}</div>
                <div><strong>Età:</strong> ${student.age}</div>
            </div>
        `;
    });
    arrayClassi.innerHTML += `
        <div class="card mb-3">
            <div class="card-body">
                <div>
                    <h4>${cls.className}</h4>
                </div>
                <hr class="text-primary">
                ${studentList}
            </div>
        </div>
    `;
});

// MAP - restituisce un nuovo array, quindi è più utile quando devi trasformare i dati
const cars = [
    { brand: "Tesla", model: "Model 3", year: 2022, color: "Rosso" },
    { brand: "BMW", model: "X5", year: 2020, color: "Nero" },
    { brand: "Audi", model: "A3", year: 2019, color: "Bianco" },
    { brand: "Mercedes", model: "GLA", year: 2021, color: "Grigio" },
    { brand: "Fiat", model: "500", year: 2018, color: "Blu" }
];

const arrayMap = document.getElementById('array-map');

arrayMap.innerHTML = cars.map((car, index, allArray) => `
    <div class="card mb-3">
        <div class="card-body">
            <div class="badge text-bg-primary rounded-pill">
                ${index + 1}
            </div>
            <div>
                <h4>${car.brand}</h4>
            </div>
            <hr class="text-primary">
            <div>
                <p>${car.model}</p>
                <p>${car.year}</p>
                <p>${car.color}</p>
            </div>
        </div>

        <hr class="text-primary">

        <div>
            <p>Totale macchine: <h5>${allArray.length}</h5></p>
        </div>
    </div>
`).join(''); // Unisce tutto in una stringa senza virgole

// FILTER
const allCars = [
    { brand: "Tesla", model: "Model 3", year: 2022, color: "Rosso" },
    { brand: "BMW", model: "X5", year: 2020, color: "Nero" },
    { brand: "Audi", model: "A3", year: 2019, color: "Bianco" },
    { brand: "Mercedes", model: "GLA", year: 2021, color: "Grigio" },
    { brand: "Fiat", model: "500", year: 2018, color: "Blu" }
];

const filteredCars = allCars.filter(car => car.year >= 2020); // Filtra solo le macchine dal 2020 in poi

const arrayFilter = document.getElementById("array-filter");

arrayFilter.innerHTML = filteredCars.map(car => `
    <div class="shadow">
        <div class="card mb-4 shadow-sm">
            <div class="card-body">
                <h5 class="card-title">${car.brand} ${car.model}</h5>
                <p class="card-text">
                    <strong>Anno:</strong> ${car.year} <br>
                    <strong>Colore:</strong> ${car.color}
                </p>
                <span class="badge bg-success">Anno: ${car.year}</span>
            </div>
        </div>
    </div>
`).join('');

// Rubrica Search
const persons = [
    { nome: 'Luca', cognome: 'Rossi', telefono: '123-456-7890' },
    { nome: 'Anna', cognome: 'Bianchi', telefono: '234-567-8901' },
    { nome: 'Marco', cognome: 'Verdi', telefono: '345-678-9012' },
    { nome: 'Giulia', cognome: 'Neri', telefono: '456-789-0123' }
];

// Recupera ID Document
const searchInput = document.getElementById('searchInput');
const listaPersone = document.getElementById('listaPersone');
const resetBtn = document.getElementById('resetBtn');

// Funzione mostra lista - rubrica
function mostraLista(lista) {
    listaPersone.innerHTML = '';
    if (lista.length === 0) {
        listaPersone.innerHTML = '<div class="alert alert-warning"> Nessun risultato trovato. </div>';
        return;
    }
    else {
        lista.forEach(p => {
            const div = document.createElement('div'); // crea elemento DIV
            div.className = 'list-group-item list-group-item-action d-flex justify-content-between align-items-center';
            div.innerHTML = `<strong>${p.nome} ${p.cognome}</strong><span class="text-muted">${p.telefono}</span>`;
            listaPersone.appendChild(div);
        });
    }
}

mostraLista(persons);  // visualizza rubrica tramite funzione

// Evento - filtra in base a ricerca
searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();  // toLowerCase() - trasforma una stringa in lettere minuscole, senza modificare l'originale
    const filtrati = persons.filter(p =>
    p.nome.toLowerCase().includes(query) ||  // includes() - verifica se una stringa o un array contiene un determinato elemento
    p.cognome.toLowerCase().includes(query) ||
    p.telefono.toLowerCase().includes(query)
    );
    mostraLista(filtrati);  // Mostra lista in base ai filtrati
});

// Reset Button
resetBtn.addEventListener('click', () => {
    searchInput.value = '';  // Svuota barra di ricerca
    mostraLista(persons);  // Mostra intera rubrica
});


//  Destructuring - Permette di estrarre gli elementi da un array o da un oggetto e di assegnarli a variabili
const cats = [
    {
        nome: "Milo",
        razza: "Siamese",
        colore: "Beige e marrone",
        anni: 3,
        giocattoli: ["topolino di stoffa", "pallina rumorosa", "cordicella"]
    },
    {
        nome: "Luna",
        razza: "Maine Coon",
        colore: "Grigio tigrato",
        anni: 5,
        giocattoli: ["piume", "tunnel", "laser"]
    },
    {
        nome: "Oliver",
        razza: "Europeo",
        colore: "Bianco e arancione",
        anni: 2,
        giocattoli: ["scatola di cartone", "palla con erba gatta", "topo meccanico"]
    },
    {
        nome: "Nala",
        razza: "Bengala",
        colore: "Maculato dorato",
        anni: 4,
        giocattoli: ["corda con campanella", "tubo elastico", "pesce in peluche"]
    }
];

//  Recupero ID
const descriptionDestr = document.getElementById('description-destr');
const arrayDestr = document.getElementById('array-destr');
const stampDestr = document.getElementById('stamp-destr');

//  Crea nuovo <p> - descrizione Destructuring
const newP = document.createElement('p');  // Crea un nuovo <p>
newP.classList.add('fs-6');  // Aggiunge una classe
newP.textContent = 'Permette di estrarre gli elementi da un array o da un oggetto e di assegnarli a variabili.';  // Aggiunge testo  
descriptionDestr.appendChild(newP);  // Aggiunge il div dentro #contenitore

//  Create Card dell'Array
arrayDestr.innerHTML = cats.map((cat,index) => `
    <div class="card mb-3">
        <div class="card-body">
            <div class="list-group-item list-group-item-action">
                <div class="text-start"><b>Nome:</b> ${cat.nome},</div>
                <div class="text-start"><b>Razza:</b> ${cat.razza},</div>
                <div class="text-start"><b>Colore:</b> ${cat.colore},</div>
                <div class="text-start"><b>Anni:</b> ${cat.anni},</div>
                <div class="text-start"><b>Toys:</b >${cat.giocattoli.join(',<br>')}</div>
            </div>
        </div>
    </div>
`).join('');

//  Card Destructuring
cats.forEach(cat => {
    const { nome, razza } = cat;  // Destructuring per nome e razza - recupero di alcuni elementi dall'object

    const col = document.createElement('div');

    const card = document.createElement('div');
    card.className = 'card shadow mb-3';

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    cardBody.innerHTML = `
      <h5 class="card-title">${nome}</h5>
      <p class="card-text"><strong>Razza:</strong> ${razza}</p>
    `;

    card.appendChild(cardBody);
    col.appendChild(card);
    stampDestr.appendChild(col);
});