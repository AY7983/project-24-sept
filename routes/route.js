const express = require('express')
const controller = require('../controllers/login')
const router = express.Router()
router.use(express.urlencoded({ extended:false }))
router.get('/',(req,res)=>{
    controller.loginpage(req,res)
})
router.get('/signup',(req,res)=>{
    controller.signuppage(req,res)
})
router.post('/signup/submit',(req,res)=>{
    controller.signupSubmit(req,res)
})
router.post('/login',(req,res)=>{
    controller.doLogin(req,res)
})


module.exports=router