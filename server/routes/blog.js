const express = require("express")
const router = express.Router()
const asyncHandler = require("express-async-handler")
const Post = require("../models/blogModel")

router.get("/api/blog", asyncHandler(async (req,res)=>{
    var blog = await Post.find({},"title tag date image")
    return res.send(blog)
}))

module.exports = router
