const database = require('../config/database')

const addRoom = (req, res) => {

    const floor = req.body.roomInfo.floor
    const name = req.body.roomInfo.name
    const apartmentId = req.body.apartmentId

    sql = `INSERT INTO rooms (apartmentId, floor, number, status, lastBill, createDate) VALUES (?, ?, ?, ?, ?, ?);`
    params = [
        apartmentId,
        floor,
        name,
        'available',
        Date.now(),
        Date.now()
    ]

    database.query(sql, params, (err, result) => {
        if (err) {
            return res.status(200).send({
                success: false,
                message: err.message
            })
        }
        const roomImage = req.body.roomImage

        let imageParams = []
        for (let i = 0; i < roomImage.length; ++i) {
            imageParams.push([
                result.insertId,
                roomImage[i]
            ])
        }

        if (imageParams.length > 0) {
            database.query(`INSERT INTO roomImage (roomId, data) VALUES ?`, [imageParams], (err, result) => {
                if (err) {
                    console.log(err)
                } else {
                    console.log('Success!')
                }
            })
        }

        return res.status(200).send({
            success: true,
            message: 'Phòng đã được tạo',
            id: result.insertId
        })
    })
}

const getRoomList = (req, res) => {

    const apartmentId = req.body.apartmentId

    sql = `SELECT * FROM rooms WHERE apartmentId=?`
    params = [apartmentId]

    database.query(sql, params, (err, result) => {
        if (err) {
            return res.status(200).send({
                success: false,
                message: err.message
            })
        }
        if (result.length < 1) {
            return res.status(200).send({
                success: false,
                message: 'Không tồn tại',
            })
        }

        return res.status(200).send({
            success: true,
            message: 'Lấy thành công',
            roomList: result
        })
    })
}

const getRoom = (req, res) => {
    const roomId = req.body.roomId

    sql = `
SELECT
	apartments.userId AS ownerId,
    CONCAT(users.firstName, ' ', users.lastName) AS username,
	rooms.roomId AS roomId,
    rooms.apartmentId AS apartmentId,
    rooms.floor AS floor,
    rooms.number AS number,
    rooms.rented AS rented,
    rooms.lastRent AS lastRent,
    apartments.address AS address,
    apartments.tienNha AS tienNha,
    apartments.tienDien AS tienDien,
    apartments.tienNuoc AS tienNuoc
FROM
    rooms
LEFT JOIN
	apartments ON rooms.apartmentId = apartments.apartmentId
LEFT JOIN
	users ON apartments.userId = users.userId
WHERE
	rooms.roomId = ?;`
    params = [roomId]

    database.query(sql, params, (err, result) => {
        if (err) {
            return res.status(200).send({
                success: false,
                message: err.message
            })
        }
        if (result.length < 1) {
            return res.status(200).send({
                success: false,
                message: 'Không tồn tại',
            })
        }
        return res.status(200).send({
            success: true,
            message: 'Lấy thành công',
            room: result[0]
        })
    })
}

const updateRoom = (req, res) => {

}

const getRoomImage = (req, res) => {
    const roomId = req.body.roomId

    sql = `SELECT * FROM roomImage WHERE roomId=?`
    params = [roomId]

    database.query(sql, params, (err, result) => {
        if (err) {
            return res.status(500).send({
                success: false,
                message: err.message
            })
        }
        if (result.length < 1) {
            return res.status(200).send({
                success: false,
                message: 'Không tồn tại',
            })
        }

        return res.status(200).send({
            success: true,
            message: 'Lấy thành công',
            images: result
        })
    })
}

const rentRoom = async (req, res) => {
    try {
        const userId = req.body.authentication.userId
        const roomId = req.body.roomId

        const rented = await new Promise((resolve, reject) => {
            database.query('SELECT * FROM rooms WHERE rented=?', [userId], (err, result) => {
                if (err) reject(err)
                else resolve(result)
            })
        })

        if (rented.length > 0) {
            return res.status(200).send({
                success: false,
                message: 'Bạn đã thuê phòng khác'
            })
        }

        const room = await new Promise((resolve, reject) => {
            database.query('SELECT * FROM rooms WHERE roomId=?', [roomId], (err, result) => {
                if (err) reject(err)
                else resolve(result)
            })
        })

        if (room.length < 0) {
            return res.status(200).send({
                success: false,
                message: 'Không tìm thấy phòng'
            })
        }

        if (room[0].status !== 'available') {
            return res.status(200).send({
                success: false,
                message: 'Phòng đã được thuê'
            })
        }

        await new Promise((resolve, reject) => {
            database.query('UPDATE rooms SET rented=?, status=? WHERE roomId=?', [userId, 'pending', roomId], (err, result) => {
                if (err) reject(err)
                else resolve(result)
            })
        })

        res.status(200).send({
            success: true,
            message: 'Yêu cầu của bạn đã gửi tới chủ nhà'
        })

    } catch (err) {
        res.status(200).send({
            success: false,
            message: err.message
        })
    }
}

const approveRentRequest = async (req, res) => {
    try {
        const roomId = req.body.roomId
        await new Promise((resolve, reject) => {
            database.query('UPDATE rooms SET status=?, lastRent=? WHERE roomId=?', ['approved', Date.now(), roomId], (err, result) => {
                if (err) reject(err)
                else resolve(result)
            })
        })

        res.status(200).send({
            success: true,
            message: 'Phê duyệt thành công'
        })
    } catch (err) {
        res.status(500).send({
            success: false,
            message: err.message
        })
    }
}

const rejectRentRequest = async (req, res) => {
    try {
        const roomId = req.body.roomId
        await new Promise((resolve, reject) => {
            database.query('UPDATE rooms SET rented=?, status=? WHERE roomId=?', [null, 'available', roomId], (err, result) => {
                if (err) reject(err)
                else resolve(result)
            })
        })

        res.status(200).send({
            success: true,
            message: 'Đã từ chối yêu cầu'
        })
    } catch (err) {
        res.status(500).send({
            success: false,
            message: err.message
        })
    }
}

const freeRoom = async (req, res) => {
    try {
        const roomId = req.body.roomId
        await new Promise((resolve, reject) => {
            database.query('UPDATE rooms SET rented=?, status=? WHERE roomId=?', [null, 'available', roomId], (err, result) => {
                if (err) reject(err)
                else resolve(result)
            })
        })

        res.status(200).send({
            success: true,
            message: 'Xóa người dùng thành công'
        })
    } catch (err) {
        res.status(500).send({
            success: false,
            message: err.message
        })
    }
}

const getAllRentRequest = async (req, res) => {
    try {
        const apartmentId = req.body.apartmentId
        const rentRequests = await new Promise((resolve, reject) => {
            database.query(`
            SELECT
            apartments.userId AS ownerId,
            apartments.apartmentId AS apartmentId,
            rooms.roomId AS roomId,
            rooms.rented AS rented,
            rooms.status AS status,
            rooms.floor AS roomFloor,
            rooms.number AS roomNumber,
            CONCAT(users.firstName, ' ', users.lastName) AS username
            FROM rooms
            LEFT JOIN users ON rooms.rented = users.userId
            LEFT JOIN apartments ON apartments.apartmentId = rooms.apartmentId
            WHERE apartments.apartmentId = ? AND rooms.status = 'pending'`, [apartmentId], (err, result) => {
                if (err) reject(err)
                else resolve(result)
            })
        })

        if (rentRequests.length < 1) {
            return res.status(200).send({
                success: false,
                message: 'Không có yêu cầu nào'
            })
        }

        res.status(200).send({
            success: true,
            message: 'Lấy thành công',
            rentList: rentRequests
        })
    } catch (err) {
        res.status(200).send({
            success: false,
            message: err.message
        })
    }
}

const createBill = async (req, res) => {
    try {
        const billData = req.body.bill
        if(billData.note === '') billData.note = `Hóa đơn tháng ${new Date().getMonth() + 1} năm ${new Date().getFullYear()}`
        await new Promise((resolve, reject) => {
            database.query(
                `INSERT INTO bills (soDienTruoc, soDienSau, soNuocTruoc, soNuocSau, tienNha, heSoTienDien, heSoTienNuoc, heSoTienNha, roomId, payerId, note, createDate) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, 
            [billData.soDien.truoc, billData.soDien.nay, billData.soNuoc.truoc, billData.soNuoc.nay, billData.heSoTienNha, billData.tienDien, billData.tienNuoc, billData.tienNha, billData.roomId, billData.payerId, billData.note, Date.now()], 
            (err, result) => {
                if(err) reject(err)
                else resolve(result)
            })
        })

        await new Promise((resolve, reject) => {
            database.query(`UPDATE rooms SET lastBill=?, soDien=?, soNuoc=? WHERE roomId=?`,
            [Date.now(), billData.soDien.nay, billData.soNuoc.nay, billData.roomId],
            (err, result) => {
                if(err) reject(err)
                else resolve(result)
            })
        })

        res.status(200).send({
            success: true,
            message: 'Tạo hóa đơn thành công'
        })
    } catch (err) {
        res.status(500).send({
            success: false,
            message: err.message
        })
    }
}

const getPaymentList = async (req, res) => {
    try {
        const paymentList = await new Promise((resolve, reject) => {
            database.query(
                `SELECT 
                bills.billId,
                bills.soDienTruoc,
                bills.soDienSau,
                bills.soNuocTruoc,
                bills.soNuocSau,
                bills.tienNha,
                bills.heSoTienDien,
                bills.heSoTienNuoc,
                bills.heSoTienNha,
                bills.roomId,
                bills.payerId,
                bills.note,
                bills.createDate,
                bills.paymentDate,
                apartments.apartmentId AS apartmentId,
                apartments.address AS roomAddress,
                rooms.floor AS roomFloor,
                rooms.number AS roomNumber,
                apartments.userId AS ownerId,
                CONCAT(ownerTable.firstName, ' ', ownerTable.lastName) AS ownerName,
                CONCAT(payerTable.firstName, ' ', payerTable.lastName) AS payerName
            FROM bills
            LEFT JOIN rooms ON bills.roomId = rooms.roomId
            LEFT JOIN apartments ON rooms.apartmentId = apartments.apartmentId
            LEFT JOIN users AS ownerTable ON apartments.userId = ownerTable.userId
            LEFT JOIN users AS payerTable ON bills.payerId = payerTable.userId
            WHERE rooms.roomId = ?
            `, 
                [req.body.roomId], (err, result) => {
                if(err) reject(err)
                else resolve(result)
            })
        })
        res.status(200).send({
            success: true,
            message: 'Lấy danh sách thành công',
            paymentList: paymentList
        })
    } catch (err) {
        res.status(500).send({
            success: false,
            message: err.message
        })
    }
}

module.exports = {
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
}