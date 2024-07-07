const mongoose = require('mongoose');

// Here I define the Comment schema with fields for product, user, rating, images, and text.
const CommentSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  rating: Number,
  images: [String],
  text: String
});

module.exports = mongoose.model('Comment', CommentSchema);
