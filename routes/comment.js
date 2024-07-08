const express = require('express');
const Comment = require('../models/Comment');
const router = express.Router();

// Here I define the route to create a new comment.
router.post('/', async (req, res) => {
  try {
    const comment = new Comment(req.body);
    await comment.save();
    res.status(200).send(comment);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Here I define the route to get all comment.
router.get('/', async (req, res) => {
  try {
    const comments = await Comment.find();
    res.status(200).send(comments);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
