// required modules
const { gql } = require('apollo-server-express');

// create type query definitions
const typeQuery = [
   gql`
      type Query{
         getProducts: [Product!]
         getProductsByCategory(category: String!): [Product!]
         getProduct(productId: ID!): Product!
         searchProducts(searchInput: String!): [Product!]
      }
   `
]

// export module
module.exports = typeQuery;