// required modules
const Product = require('../../../../models/Product')

// create products mutations
const productsMutation = {

   createProduct: async (
      _,
      { createProductInput: {
         title, description, category, image, price
      } }
   ) => {
      try {
         // create a new product
         const newProduct = new Product({
            title, description, category, image, price
         })
         // save and return product
         const productSaved = await newProduct.save()
         return productSaved;
      }
      catch (error) {
         throw new Error(error);
      }
   }

}

// export module
module.exports = productsMutation;