const express = require('express')

const { addApartment } = require('../controller/apartmentCtrl')

const router = express.Router()

const { ownerMiddleware } = require('../middleware/ownerMiddleware')

router.post('/add', ownerMiddleware, addApartment)

module.exports = router;