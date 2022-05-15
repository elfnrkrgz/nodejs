const express = require('express')
const Router = require('express')
const router = new Router()
const controller = require('../controller/authController')
const {check} = require ("express-validator")

const controll = new controller
router.post('/register',
            [
             check('username','username can not be empty.').notEmpty()
            ],

           controll.register)

module.exports = router