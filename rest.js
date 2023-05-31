import {renderUsersTable} from './usersView.js';
import {renderPostsList} from './postsView.js';

document.querySelector('#cmdPosts')
    .addEventListener('click',onPostsClick)

document.querySelector('#cmdUsers')
    .addEventListener('click',onUsersClick)

const mainElement = document.querySelector('main');  

function onUsersClick(e){
    renderUsersTable().then( usersView => {
        mainElement.innerHTML = usersView;
    } );
}

function onPostsClick(e){
    renderPostsList().then(postsView => {
        mainElement.innerHTML = postsView;
    })
}
