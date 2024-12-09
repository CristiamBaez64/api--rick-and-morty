require('dotenv').config();
const { ApolloServer } = require('apollo-server-express');
const morgan = require('morgan');
const express = require('express');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const app = express()


// Middleware
app.use(morgan('dev'));


const server = new ApolloServer({
    typeDefs, resolvers
});


async function startServer(){
    await server.start();
    server.applyMiddleware({ app });

    const PORT = process.env.PORT || 4001;
    app.listen(PORT, () => {
        console.log(`server is running on port http://localhost:${PORT}${server.graphqlPath}`);
    })
}

startServer();