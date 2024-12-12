// auth.js
const users = [
    { username: 'admin', password: 'password123' }
];

function authenticate(username, password) {
    const user = users.find(u => u.username === username && u.password === password);
    return user ? true : false;
}

module.exports = { authenticate };
