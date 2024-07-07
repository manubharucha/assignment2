const express = require('express');
const User = require('../models/User');
const router = express.Router();

// Here I define the route to create a new cart.
router.post('/', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Here I define the route to get all carts.
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
