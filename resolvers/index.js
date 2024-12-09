const { mergeResolvers } = require('@graphql-tools/merge');

const characterResolvers = require('./character');

const resolversArray = [
    characterResolvers
]

const resolvers = mergeResolvers( resolversArray );

module.exports = resolvers;