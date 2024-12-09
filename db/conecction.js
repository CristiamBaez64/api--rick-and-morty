const mysql = require('mysql2');

const dbConecction = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : 'root',
    database : 'rick_and_morty'
});

// async function getConnection() {
//     try {
//         if (pool){
//             return pool;
//         }
//         pool = await mysql.connect(dbConecction);

//     } catch (err) {
//         console.log("Database Connection Failed !!!", err);
//     }
// }

// dbConecction.connect((err) => {
//     if (err) {
//       console.log("Database Connection Failed !!!", err);
//     } else {
//         console.log("Database Connection Succesfull!!");
//     }
// });

module.exports = dbConecction;