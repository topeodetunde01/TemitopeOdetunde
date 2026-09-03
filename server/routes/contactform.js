const express = require("express")
const router = express.Router()
const { sendConfirmationMail } = require('../utils/mailer')

router.post('/api/v1/contact', async (req,res,next)=>{
    try {
        const {fullName, phoneNumber, email, service, need} = req.body
        if(!fullName){
            return res.status(401).send({success : false, message : "fullName field missing"})
        }
        if(!phoneNumber){
            return res.status(401).send({success : false, message : "phoneNumber field missing"})
        }
        if(!email){
            return res.status(401).send({success : false, message : "email field missing"})
        }
        if(!service){
            return res.status(401).send({success : false, message : "service field missing"})
        }
        if(!need){
            return res.status(401).send({success : false, message : "need field missing"})
        }
        await sendConfirmationMail(res,fullName, phoneNumber, email, service, need )
    } catch (error) {
        next(error)
    }
})

module.exports = router
