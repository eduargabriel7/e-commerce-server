// required modules
const { gql } = require('apollo-server-express');

// create type query definitions
const typeQuery = [
   gql`
      type Query{
         getProducts: [Product!]
         getProduct(productId: ID!): Product!
      }
   `
]

// export module
module.exports = typeQuery;