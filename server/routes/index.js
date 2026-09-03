var express = require('express');
var router = express.Router();
const asyncHandler = require("express-async-handler")
const Post = require("../models/blogModel")

/* GET home page. */
router.get('/api/home', asyncHandler(async function(req, res) {
  const blog = await Post.find({},"title tag date image").sort({date : 1}).limit(3)
  return res.send(blog);
}));

module.exports = router;
