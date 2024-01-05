const express = require('express')

const { 
    addRoom, 
    getRoomList, 
    getRoom, 
    updateRoom, 
    getRoomImage, 
    rentRoom, 
    getAllRentRequest 
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

router.post('/get-all-rent-request', ownerMiddleware, getAllRentRequest)

module.exports = router;