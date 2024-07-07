const mongoose = require('mongoose');

// Here I define the Order schema with fields for user, products, totalCost, and date.
const OrderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  products: [{ product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' }, quantity: Number }],
  totalCost: Number,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', OrderSchema);
