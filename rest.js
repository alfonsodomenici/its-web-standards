//prendo i riferimenti agli oggetti HTML necessari
const cmdUsers = document.querySelector('#cmdUsers');
const cmdPosts = document.querySelector('#cmdPosts');
const main = document.querySelector('main');

//definisco le funzioni necessarie

//ritorna l'intestazione della tabella

/**
 * crea una cella td o th
 * @param {*} element elemento cella 'th' o 'td'
 * @param {*} data dato della cella
 * @returns 
 */
function createUsersCell(element,data){
    const el = document.createElement(element);
    el.innerHTML = data;
    return el;
}

/**
 * create l'intestazione della tabella
 * @param {*} columns array con nomi delle colonne
 * @returns 
 */
function createUsersTableHeader(columns){
    const head = document.createElement('thead');
    columns
        .map(v => createUsersCell('th',v))
        .forEach(v => head.appendChild(v));
    return head;
}

/**
 * crea un elemento tr con i dati dell'utente
 * @param {*} user 
 * @returns 
 */
function createUsersTableRow(user){
    const row = document.createElement('tr');
    row.appendChild(createUsersCell('td',user.id));
    row.appendChild(createUsersCell('td',user.name));
    row.appendChild(createUsersCell('td',user.username));
    row.appendChild(createUsersCell('td',user.email));
    return row;
}

/**
 * crea il corpo della tabella
 * @param {*} data array di oggetti json users
 * @returns 
 */
function createUsersTableBody(data){
    const body = document.createElement('tbody');
    data
        .map(v => createUsersTableRow(v))
        .forEach(v => body.appendChild(v));
    return body;
}

/**
 * crea la tabella per i dati degli utenti
 * @param {
 * } data 
 */
function createUsersTable(data){
    main.innerHTML='';
    const table = document.createElement('table');
    table.appendChild(createUsersTableHeader(["id","name","username","email"]));
    table.appendChild(createUsersTableBody(data));
    main.appendChild(table);
}

function createPostsList(data){
    main.innerHTML='';

}

function onUsersClick(e){
    fetch('https://jsonplaceholder.typicode.com/users',{
        "method": "GET"
    }).then(response => {
        return response.json();
    }).then(data => {
        createUsersTable(data);
    }).catch(error => {
        console.log(error.message);
    })
}

function onPostsClick(e){
    fetch('https://jsonplaceholder.typicode.com/posts',{
        "method": "GET"
    }).then(response => {
        return response.json();
    }).then(data => {
        createPostsList(data);
    }).catch(error => {
        console.log(error.message);
    })
}

/*
crea un messaggio di dati non disponibile nel main
*/
function createNoDataMessage(){
    main.innerHTML = '';
    const el = document.createElement('h3');
    el.innerHTML = 'Nessun dato da visualizzare';
    el.style.textAlign='center';
    main.appendChild(el);
}
//associo eventi click dei bottoni alle funzioni
cmdUsers.addEventListener('click', onUsersClick);
cmdPosts.addEventListener('click',onPostsClick);

//creo messaggio iniziale
createNoDataMessage();