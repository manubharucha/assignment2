const mongoose = require('mongoose');

// Here I define the User schema with fields for email, password, username, purchaseHistory, and shippingAddress.
const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  username: { type: String, required: true },
  purchaseHistory: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }],
  shippingAddress: String
});

module.exports = mongoose.model('User', UserSchema);
