const express=require('express')
const { authenticateToken } = require('../middleware/middleware')

const router=express.Router()
const signupController = require('../controller/signup/signupController')
const loginController = require('../controller/login/loginController')
const userByIdController = require('../controller/user/userByIdController')
const userEditController = require('../controller/user/editController')

//login module
router.post("/signup",signupController.registerUser)
router.post("/login",loginController.loginUser)
router.get("/:userId",authenticateToken, userByIdController.userById)
router.put("/:userId",authenticateToken,userEditController.editUser)

module.exports=router;