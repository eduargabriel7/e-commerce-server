// required modules
const { model, Schema } = require('mongoose');

// create schema
const productSchema = new Schema({
   title: {
      type: String, unique: true, required: true
   },
   description: {
      type: String, required: true
   },
   category: {
      type: String, required: true
   },
   price: {
      type: Number, required: true
   },
   image: {
      type: String, required: true
   },
   createdAt: {
      type: String, default: new Date().toISOString()
   },
   updatedAt: {
      type: String, default: new Date().toISOString()
   },
})

// export model
module.exports = model('Product', productSchema);