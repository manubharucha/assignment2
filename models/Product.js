const mongoose = require('mongoose');

// Here I define the Product schema with fields for description, image, pricing, and shippingCost.
const ProductSchema = new mongoose.Schema({
  description: String,
  image: String,
  pricing: Number,
  shippingCost: Number
});

module.exports = mongoose.model('Product', ProductSchema);
