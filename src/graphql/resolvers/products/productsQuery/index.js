// required modules
const Product = require('../../../../models/Product')

// create products queries
const productsQuery = {

   getProducts: async () => {
      try {
         const productsFound = await Product.find();
         // return products
         return productsFound;
      }
      catch (error) {
         throw new Error(error);
      }
   },

   getProduct: async (_, { productId }) => {
      try {
         const productFound = await Product.findById(productId);
         if (!productFound) {
            throw new Error('product does not exist')
         }
         // return product
         return productFound;
      }
      catch (error) {
         throw new Error(error);
      }
   }

}

// export module
module.exports = productsQuery;