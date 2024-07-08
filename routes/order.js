const express = require('express');
const Order = require('../models/Order');
const router = express.Router();

// Here I define the route to create a new order.
router.post('/', async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.status(200).send(order);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Here I define the route to get all order.
router.get('/', async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).send(orders);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
