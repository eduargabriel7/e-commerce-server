// required modules
const { gql } = require('apollo-server-express');

// create type input definitions
const typeInput = [
   gql`
      input CreateProductInput{
         title: String!
         description: String!
         category: String!
         image: String!
         price: Int!
      }  
   `
]

// export module
module.exports = typeInput;