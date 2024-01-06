const database = require('../config/database')

const addApartment = (req, res) => { // Thêm 1 căn hộ

    const address = req.body.apartmentInfo.address
    const tienNha = req.body.apartmentInfo.tienNha
    const tienDien = req.body.apartmentInfo.tienDien
    const tienNuoc = req.body.apartmentInfo.tienNuoc

    sql = `INSERT INTO apartments (userId, address, tienNha, tienDien, tienNuoc, createDate) VALUES (?, ?, ?, ?, ?, ?);`
    params = [
        req.body.authentication.userId,
        address,
        tienNha,
        tienDien,
        tienNuoc,
        Date.now()
    ]

    database.query(sql, params, (err, result) => {
        if (err) {
            return res.status(200).send({
                success: false,
                message: err.message
            })
        }
        const apartmentImage = req.body.apartmentImage

        let imageParams = []
        for (let i = 0; i < apartmentImage.length; ++i) {
            imageParams.push([
                result.insertId,
                apartmentImage[i]
            ])
        }

        if (imageParams.length > 0) {
            database.query(`INSERT INTO apartmentImage (apartmentId, data) VALUES ?`, [imageParams], (err, result) => {
                if (err) {
                    console.log(err)
                } else {
                    console.log('Success!')
                }
            })
        }

        return res.status(200).send({
            success: true,
            message: 'Phòng trọ đã được tạo',
            id: result.insertId
        })
    })
}

const deleteApartment = (req, res) => { // Xóa 1 căn hộ

}

const getApartmentList = (req, res) => { // Lấy danh sách căn hộ
    const page = req.body.page
    const userId = req.body.userId
    let blacklist = req.body.blacklist

    if (blacklist === undefined) blacklist = 0

    let recordPerPage = req.body.recordPerPage
    if (recordPerPage === '' || recordPerPage === null || recordPerPage === undefined || Number(recordPerPage) === NaN) {
        recordPerPage = 10
    }

    if (page === '' || page === undefined || page === null) {
        return res.status(200).send({
            success: false,
            message: 'Sai page!'
        })
    }

    if (userId === '' || userId === undefined || userId === null) {
        return res.status(200).send({
            success: false,
            message: 'Sai userId!'
        })
    }

    let sql, params

    if (userId === 0) {
        sql = `
        SELECT
            apartments.apartmentId AS apartmentId,
            apartments.userId AS userId,
            apartments.address AS address,
            COALESCE(COUNT(CASE WHEN rooms.status <> 'available' THEN rooms.roomId END), 0) AS rentedRoom,
            COALESCE(COUNT(rooms.roomId), 0) AS roomNumber
        FROM
            apartments
        LEFT JOIN
            rooms ON apartments.apartmentId = rooms.apartmentId
        WHERE
            1 AND apartments.userId <> ?
        GROUP BY
            apartments.apartmentId, apartments.userId, apartments.address
        LIMIT ? OFFSET ?;`
        params = [blacklist, recordPerPage, recordPerPage * Number(page - 1)]
    } else {
        sql = `
        SELECT
            apartments.apartmentId AS apartmentId,
            apartments.userId AS userId,
            apartments.address AS address,
            COALESCE(COUNT(CASE WHEN rooms.status <> 'available' THEN rooms.roomId END), 0) AS rentedRoom,
            COALESCE(COUNT(rooms.roomId), 0) AS roomNumber
        FROM
            apartments
        LEFT JOIN
            rooms ON apartments.apartmentId = rooms.apartmentId
        WHERE
            userId = ? AND apartments.userId <> ?
        GROUP BY
            apartments.apartmentId, apartments.userId, apartments.address
        LIMIT ? OFFSET ?;`
        params = [userId, blacklist, recordPerPage, recordPerPage * Number(page - 1)]
    }

    database.query(sql, params, (err, result) => {
        if (err) {
            return res.status(200).send({
                success: false,
                message: err.message
            })
        }
        return res.status(200).send({
            success: true,
            message: 'Lấy thành công',
            list: result
        })
    })
}

const getApartment = (req, res) => {
    const apartmentId = req.body.apartmentId

    sql = `
    SELECT
        apartments.apartmentId AS apartmentId,
        apartments.userId AS userId,
        CONCAT(users.firstName, ' ', users.lastName) AS username,
        apartments.address AS address,
        apartments.tienNha AS tienNha,
        apartments.tienDien AS tienDien,
        apartments.tienNuoc AS tienNuoc,
        COALESCE(COUNT(CASE WHEN rooms.status <> 'available' THEN rooms.roomId END), 0) AS rentedRoom,
        COALESCE(COUNT(rooms.roomId), 0) AS roomNumber
    FROM
        apartments
    LEFT JOIN
        rooms ON apartments.apartmentId = rooms.apartmentId
    LEFT JOIN
    	users ON apartments.userId = users.userId
    WHERE
        apartments.apartmentId=?
    GROUP BY
        apartments.apartmentId, apartments.userId, apartments.address`
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
            apartment: result[0]
        })
    })
}

const getApartmentImage = (req, res) => {
    const apartmentId = req.body.apartmentId

    sql = `SELECT * FROM apartmentImage WHERE apartmentId=?`
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
            images: result
        })
    })
}

const editApartment = (req, res) => {

    const apartmentId = req.body.apartmentId
    const address = req.body.apartmentInfo.address
    const tienNha = req.body.apartmentInfo.tienNha
    const tienDien = req.body.apartmentInfo.tienDien
    const tienNuoc = req.body.apartmentInfo.tienNuoc

    sql = `UPDATE apartments SET address=?, tienNha=?, tienDien=?, tienNuoc=? WHERE apartmentId=?;`
    params = [
        address,
        tienNha,
        tienDien,
        tienNuoc,
        apartmentId
    ]

    database.query(sql, params, (err, result) => {
        if (err) {
            return res.status(200).send({
                success: false,
                message: err.message
            })
        }
        return res.status(200).send({
            success: true,
            message: 'Phòng trọ đã được cập nhật',
            apartment: result
        })
    })
}

const getApartmentMember = async (req, res) => {
    try {
        const memberList = await new Promise((resolve, reject) => {
            database.query(`
        SELECT 
            apartments.apartmentId AS apartmentId,
            rooms.roomId AS roomId,
            rooms.floor AS roomFloor,
            rooms.number AS roomNumber,
            rooms.rented AS roomRent,
            rooms.status AS roomStatus,
            CONCAT(users.firstName, ' ', users.lastName) AS username
        FROM apartments
        LEFT JOIN rooms ON apartments.apartmentId = rooms.apartmentId
        LEFT JOIN users ON rooms.rented = users.userId
        WHERE rooms.status = 'approved' AND apartments.apartmentId = ?`,
                [req.body.apartmentId],
                (err, result) => {
                    if (err) reject(err)
                    else resolve(result)
                })
        })

        res.status(200).send({
            success: true,
            message: 'Lấy thành công',
            memberList: memberList
        })
        
    } catch (err) {
        return res.status(500).send({
            success: false,
            message: err.message
        })
    }
}

const getApartmentRoom = async (req, res) => {
    try {
        const memberList = await new Promise((resolve, reject) => {
            database.query(`
        SELECT 
            apartments.apartmentId AS apartmentId,
            rooms.roomId AS roomId,
            rooms.floor AS roomFloor,
            rooms.number AS roomNumber,
            rooms.rented AS roomRent,
            rooms.status AS roomStatus,
            rooms.soDien AS soDien,
            rooms.soNuoc AS soNuoc,
            apartments.tienDien AS tienDien,
            apartments.tienNuoc AS tienNuoc,
            apartments.tienNha AS tienNha,
            rooms.lastBill AS lastBill,
            CONCAT(users.firstName, ' ', users.lastName) AS username
        FROM apartments
        LEFT JOIN rooms ON apartments.apartmentId = rooms.apartmentId
        LEFT JOIN users ON rooms.rented = users.userId
        WHERE rooms.status = 'approved' AND apartments.apartmentId = ?`,
                [req.body.apartmentId],
                (err, result) => {
                    if (err) reject(err)
                    else resolve(result)
                })
        })

        res.status(200).send({
            success: true,
            message: 'Lấy thành công',
            memberList: memberList
        })
        
    } catch (err) {
        return res.status(500).send({
            success: false,
            message: err.message
        })
    }
}

module.exports = {
    addApartment,
    deleteApartment,
    getApartmentList,
    getApartment,
    getApartmentImage,
    editApartment,
    getApartmentMember,
    getApartmentRoom
}