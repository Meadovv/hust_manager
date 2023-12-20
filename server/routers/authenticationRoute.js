const express = require('express')

const { login, register, verify } = require('../controller/authenticationCtrl')

const router = express.Router()

const { authMiddleware } = require('../middleware/authMiddleware')

router.post('/login', login)

router.post('/register', register)

router.post('/verify', authMiddleware, verify)

module.exports = router;