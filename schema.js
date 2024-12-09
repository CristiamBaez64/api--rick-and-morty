const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Character {
        id: ID!
        name: String,
        image: String,
        genderId: Int,
        originId: Int,
        speciesId: Int,
        statusId: Int,
        favorite: Boolean,
        comments: String
    }

    type Gender {
        id: ID!
        name: String
    }

    type Query {
        character: [Character]
        gender: [Gender]
    }
`;

module.exports = typeDefs;

