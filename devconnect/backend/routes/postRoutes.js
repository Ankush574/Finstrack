const express = require('express');
const router = express.Router();
const Post = require('../models/postModel');

router.get('/', async (req, res) => {
  const posts = await Post.findAll();
  res.json(posts);
});

router.post('/', async (req, res) => {
  const post = await Post.create(req.body);
  res.json(post);
});

module.exports = router;