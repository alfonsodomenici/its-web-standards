import { getAllUsers } from './usersService.js';

async function renderUsersTable() {
    const users = await getAllUsers();
    return `
        <h1>Elenco Utenti</h1>
        <table>
            <thead>
                <th>name</th>
                <th>email</th>
                <th>phone</th>
            </thead>
            <tbody>
                ${users.map(user => createUserRow(user)).join('')}
            </tbody>
        </table>
    `;
}

function createUserRow(user) {
    return `
        <tr>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.phone}</td>
        </tr>
    `;
}
export { renderUsersTable };



