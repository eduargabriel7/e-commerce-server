// required modules
const Product = require('../../../../models/Product');

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

   getProductsByCategory: async (_, { category }) => {
      try {
         const productsByCategory = await Product.find({
            category: { $regex: category, $options: 'i' }
         }).limit(10);
         // return products
         return productsByCategory;
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