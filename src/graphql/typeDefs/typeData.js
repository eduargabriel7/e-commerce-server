// required modules
const { gql } = require('apollo-server-express');

// create type data definitions
const typeData = [
   gql`
      type Product {
         id: ID!
         title: String!
         description: String!
         category: String!
         price: Int!
         image: String!
         createdAt: String!
         updatedAt: String!
      }
   `
]

// export module
module.exports = typeData;