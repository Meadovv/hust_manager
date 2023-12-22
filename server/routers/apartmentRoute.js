const express = require('express')

const { addApartment, getApartmentList, getApartment, getApartmentImage, editApartment } = require('../controller/apartmentCtrl')

const router = express.Router()

const { ownerMiddleware } = require('../middleware/ownerMiddleware')

router.post('/add', ownerMiddleware, addApartment)

router.post('/get-apartment-list', getApartmentList)

router.post('/get-apartment', getApartment)

router.post('/get-apartment-image', getApartmentImage)

router.post('/edit-apartment', ownerMiddleware, editApartment)

module.exports = router;