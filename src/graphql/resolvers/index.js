// required modules
const productsResolvers = require('./products');

// A map of functions which return data for the schema.
const resolvers = {

     Query: {
          ...productsResolvers.Query
     },

     Mutation: {
          ...productsResolvers.Mutation
     }
}

// export module
module.exports = resolvers;