const router = require('express').Router()


router.get('/gallery',(req,res)=>{
    return res.render('gallery',{title : 'Gallery'})
})

module.exports = router
