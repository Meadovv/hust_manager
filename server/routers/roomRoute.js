const express = require('express')

const { 
    addRoom, 
    getRoomList, 
    getRoom, 
    updateRoom, 
    getRoomImage, 
    rentRoom, 
    getAllRentRequest,
    approveRentRequest,
    rejectRentRequest,
    freeRoom,
    createBill,
    getPaymentList
} = require('../controller/roomCtrl')

const router = express.Router()

const { ownerMiddleware } = require('../middleware/ownerMiddleware')
const { userMiddleware } = require('../middleware/userMiddleware')

router.post('/add', ownerMiddleware, addRoom)

router.post('/update-room', ownerMiddleware, updateRoom)

router.post('/get-room-list', getRoomList)

router.post('/get-room', getRoom)

router.post('/rent-room', userMiddleware, rentRoom)

router.post('/get-room-image', getRoomImage)

router.post('/get-rent-requests', ownerMiddleware, getAllRentRequest)

router.post('/approve-rent-request', ownerMiddleware, approveRentRequest)

router.post('/reject-rent-request', ownerMiddleware, rejectRentRequest)

router.post('/free-room', ownerMiddleware, freeRoom)

router.post('/create-bill', ownerMiddleware, createBill)

router.post('/get-payment-list', ownerMiddleware, getPaymentList)

module.exports = router;