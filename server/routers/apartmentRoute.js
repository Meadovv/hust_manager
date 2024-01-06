const express = require('express')

const { 
    addApartment, 
    getApartmentList, 
    getApartment, 
    getApartmentImage, 
    editApartment,
    getApartmentMember,
    getApartmentRoom
} = require('../controller/apartmentCtrl')

const router = express.Router()

const { ownerMiddleware } = require('../middleware/ownerMiddleware')

router.post('/add', ownerMiddleware, addApartment)

router.post('/get-apartment-list', getApartmentList)

router.post('/get-apartment', getApartment)

router.post('/get-apartment-image', getApartmentImage)

router.post('/edit-apartment', ownerMiddleware, editApartment)

router.post('/get-apartment-room', ownerMiddleware, getApartmentRoom)

router.post('/get-apartment-member', ownerMiddleware, getApartmentMember)

module.exports = router;