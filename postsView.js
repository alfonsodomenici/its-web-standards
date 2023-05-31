import {getAllPosts} from './postsService.js';

async function renderPostsList (){
    const posts = await getAllPosts();
    return `
        <h1>Elenco Posts</h1>
        <ul>
            ${posts.map(post => createPostItem(post)).join('')}
        </ul>
    `;
}

function createPostItem(post){
    return `
        <li>
            <h3>${post.title}</h3>
            <p>${post.body}</p>
        </li>
    `;
}

export {renderPostsList};