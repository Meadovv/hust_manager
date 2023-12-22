const express = require('express')

const { login, register, verify, getUser } = require('../controller/authenticationCtrl')

const router = express.Router()

const { authMiddleware } = require('../middleware/authMiddleware')

router.post('/login', login)

router.post('/register', register)

router.post('/verify', authMiddleware, verify)

router.post('/getUser', getUser)

module.exports = router;