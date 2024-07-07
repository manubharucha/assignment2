const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

// Here I define the route to create a new cart.
router.post('/', async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(200).send(product);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Here I define the route to get all carts.
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
