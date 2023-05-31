async function getAllPosts(){
    const resp = await fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'GET'
    });
    return resp.json();
}

export {getAllPosts};