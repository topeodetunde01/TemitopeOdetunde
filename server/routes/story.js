const router = require("express").Router()
const Post = require("../models/blogModel")
const asyncHandler = require("express-async-handler")

router.get("/api/story/:id",asyncHandler(async (req,res)=>{
    var story = await Post.findById(req.params.id).exec()
    if(!story){
        return res.status(404).send('Not Found')
    }
    const tag = story.tag
    var related = await Post.find({tag: tag},"title tag date image").sort({date : 1}).limit(3).exec()
    var relatedContent = related.filter(content => content.title != story.title)
    return res.status(200).send({
        story,
        relatedContent
    })
}) )

module.exports = router
