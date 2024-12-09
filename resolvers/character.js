// Database Conecction
const dbConecction = require('../db/conecction')
var sql = 'SELECT * FROM characters';

//Construc Resolvers
const characterResolvers = {
    Query: {
        // Get all characters
        character : async () => {
            try {
                dbConecction.connect(function(err) {
                    if (err) throw err;
                    console.log("Connected Sucessfull");
                    const datos = dbConecction.query(sql, function (err, result) {
                        if (err) throw err;
                        console.log(result);
                        return datos;
                    });
                });
                
            } catch(err) {
                console.log(err);
                throw err;
            }
        }
    }
};

module.exports = characterResolvers;