// required modules
const typeData = require('./typeData');
const typeInput = require('./typeInput');
const typeQuery = require('./typeQuery');
const typeMutation = require('./typeMutation');

// The GraphQL schema
const typeDefs = [
   ...typeData,
   ...typeInput,
   ...typeQuery,
   ...typeMutation,
]

// export module
module.exports = typeDefs;