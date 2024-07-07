const mongoose = require('mongoose');

// Here I define the Cart schema with fields for products and user.
const CartSchema = new mongoose.Schema({
  products: [{ product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' }, quantity: Number }],
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Cart', CartSchema);
