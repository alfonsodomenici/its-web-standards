async function getAllUsers(){
    const resp = await fetch('https://jsonplaceholder.typicode.com/users',{
        method:'GET'
    });
    return resp.json();
}

export {getAllUsers};