const express = require('express')

const { 
    addApartment, 
    getApartmentList, 
    getApartment, 
    getApartmentImage, 
    editApartment,
    getApartmentMember,
    getApartmentRoom,
    getUnconfirmedBill,
    approvedBill,
    rejectedBill
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

router.post('/get-unconfirmed-bill', ownerMiddleware, getUnconfirmedBill)

router.post('/approved-bill', ownerMiddleware, approvedBill)

router.post('/rejected-bill', ownerMiddleware, rejectedBill)

module.exports = router;