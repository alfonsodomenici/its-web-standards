//commento una riga

/*
funzione che somma due numeri
*/
function somma(a, b) {
    if(!a || !b || isNaN(a) || isNaN(b) ){
        throw new Error('Argomenti non validi!!!');
    }

    return Number.parseFloat(a) + Number.parseFloat(b);
}

function onSommaClick(e) {
    console.log("********** click su bottone");
}

const onSomma = (e) => {
    const n1 = document.querySelector('#n1');
    const n2 = document.querySelector('#n2');
    console.log(n1.value, n2.value);
    const result = somma(n1.value,n2.value);
    console.log(result);
    const elRis = document.querySelector('h3');
    elRis.innerText = 'Risultato: ' + result;
}


console.log('javascript is ok!!!!');

const el = document.querySelector("h1");

console.dir(el);

el.innerText = "nuovo titolo dinamico";
el.style.color = 'red';

const cmd = document.querySelector('#cmdSomma');

//primo ascoltatore con arrow function
cmd.addEventListener('click', (e) => {
    console.log('click sul bottone somma');
});

//secondo ascoltatore
cmd.addEventListener('click', onSommaClick);

//terzo ascoltatore
cmd.addEventListener('click', onSomma);