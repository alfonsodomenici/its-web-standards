/*
dichiaro la funzione somma. Verifica che a e b siano numeri altrimenti
genera un errore.
ritorna la somma a + b
*/
function somma(a, b) {
    if (!a || !b || isNaN(a) || isNaN(b)) {
        throw new Error('Argomenti non validi!!!');
    }
    return Number.parseFloat(a) + Number.parseFloat(b);
}

/*
click su bottone somma
*/
function onSomma(e) {
    try {
        const op1 = document.querySelector('#n1').value;
        const op2 = document.querySelector('#n2').value;
        //richiamo la funzione somma
        const ris = somma(op1,op2);
        document.querySelector('#out').innerText = "Risultato: " + ris;
    }catch(e){
        document.querySelector('#out').innerText = 'Risultato: ' + e.message;
    }
}

/*
click su bottone pulisci
*/
function onPulisci(e) {
    document.querySelector('#n1').value = '';
    document.querySelector('#n2').value = '';
    document.querySelector('#out').innerText = 'Risultato: nessun risultato';
}

document.querySelector('#cmdSomma')
    .addEventListener('click', onSomma);

document.querySelector('#cmdClear')
    .addEventListener('click', onPulisci);