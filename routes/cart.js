const express = require('express');
const Cart = require('../models/Cart');
const router = express.Router();
  
// Here I define the route to create a new cart.
router.post('/', async (req, res) => {
  try {
    const cart = new Cart(req.body);
    await cart.save();
    res.status(200).send(cart);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Here I define the route to get all carts.
router.get('/', async (req, res) => {
  try {
    const carts = await Cart.find();
    res.status(200).send(carts);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
