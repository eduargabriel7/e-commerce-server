// required modules
const { gql } = require('apollo-server-express');

// create type mutation definitions
const typeMutation = [
   gql`
      type Mutation{
         createProduct(createProductInput: CreateProductInput): Product!
      }
   `
]

// export module
module.exports = typeMutation;