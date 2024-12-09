const mysql = require('mysql2');

const dbConecction = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : 'root',
    database : 'rick_and_morty'
});

module.exports = dbConecction;