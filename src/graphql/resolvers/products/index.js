// required modules
const productsQuery = require('./productsQuery');
const productsMutation = require('./productsMutation');

// resolvers
const productsResolvers = {

   // queries
   Query: productsQuery,

   // mutations
   Mutation: productsMutation

}

// export module
module.exports = productsResolvers;