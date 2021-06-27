// required modules
const { ApolloServer, PubSub } = require('apollo-server-express');
const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

// create apollo server
const pubsub = new PubSub();
const apollo = new ApolloServer({
     typeDefs,
     resolvers,
     context: ({ req, res }) => ({ req, res, pubsub }),
     introspection: true,
     playground: true
});

// export module
module.exports = apollo;