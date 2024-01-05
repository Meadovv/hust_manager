const database = require('../config/database')

const addRoom = (req, res) => {

    const floor = req.body.roomInfo.floor
    const name = req.body.roomInfo.name
    const apartmentId = req.body.apartmentId

    sql = `INSERT INTO rooms (apartmentId, floor, number, rented, createDate) VALUES (?, ?, ?, ?, ?);`
    params = [
        apartmentId,
        floor,
        name,
        0,
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
    users.firstName AS firstName,
    users.lastName AS lastName,
	rooms.roomId AS roomId,
    rooms.apartmentId AS apartmentId,
    rooms.floor AS floor,
    rooms.number AS number,
    rooms.rented AS rented,
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

const updateRoom = () => {

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
        if(result.length < 1) {
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
        const user = await new Promise((resolve, reject) => {
            database.query('SELECT * FROM users WHERE userId=?', [userId], (err, result) => {
                if(err) reject(err)
                else resolve(result)
            })
        })

        if(user.length < 0) {
            return res.status(200).send({
                success: false,
                message: 'Không tìm thấy người dùng'
            })
        }

        if(user[0].status === 2) {
            return res.status(200).send({
                success: false,
                message: 'Bạn đã thuê phòng rồi'
            })
        }

        if(user[0].status === 1) {
            return res.status(200).send({
                success: false,
                message: 'Bạn đang trong quá trình khác'
            })
        }

        await new Promise((resolve, reject) => {
            database.query('UPDATE users SET roomId=?, status=? WHERE userId=?', [roomId, 1, userId], (err, result) => {
                if(err) reject(err)
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

const getAllRentRequest = async (req, res) => {
    try {
        const userId = req.body.authentication.userId
        const rentRequests = await new Promise((resolve, reject) => {
            database.query(`
            SELECT * FROM (
                SELECT
                    apartments.userId AS ownerId,
                    users.roomId AS roomId,
                    users.userId AS userId,
                    rooms.floor AS roomFloor,
                    rooms.number AS roomNumber,
                    CONCAT(users.firstName, ' ', users.lastName) AS username,
                    users.status AS status
                FROM users
                LEFT JOIN rooms ON users.roomId = rooms.roomId
                LEFT JOIN apartments ON apartments.apartmentId = rooms.apartmentId
                WHERE users.roomId IS NOT NULL AND users.status = 1
            ) AS newTable WHERE newTable.ownerId=?`, [userId], (err, result) => {
                if(err) reject(err)
                else resolve(result)
            })
        })

        if(rentRequests.length < 1) {
            return res.status(200).send({
                success: false,
                message: 'Không có yêu cầu nào'
            })
        }

        res.status(200).send({
            success: true,
            message: 'Lấy thành công',
            requestList: rentRequests
        })
    } catch(err) {
        res.status(200).send({
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
    getAllRentRequest
}