const database = require('../config/database')

const addApartment = (req, res) => { // Thêm 1 căn hộ

    const address = req.body.apartmentInfo.address
    const roomNumber = req.body.apartmentInfo.roomNumber
    const tienNha = req.body.apartmentInfo.tienNha
    const tienDien = req.body.apartmentInfo.tienDien
    const tienNuoc = req.body.apartmentInfo.tienNuoc

    sql = `INSERT INTO apartments (userId, address, roomNumber, tienNha, tienDien, tienNuoc, createDate) VALUES (?, ?, ?, ?, ?, ?, ?);`
    params = [
        req.body.authentication.userId, 
        address, 
        roomNumber,
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
        for(let i = 0; i < apartmentImage.length; ++i) {
            imageParams.push([
                result.insertId,
                apartmentImage[i]
            ])
        }
        database.query(`INSERT INTO apartmentImage (apartmentId, data) VALUES ?`, [imageParams], (err, result) => {
            if(err) {
                console.log(err)
            } else {
                console.log('Success!')
            }
        })

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

    let recordPerPage = req.body.recordPerPage
    if(recordPerPage === '' || recordPerPage === null || recordPerPage === undefined || Number(recordPerPage) === NaN) {
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

    if(userId === 0) {
        sql = `
        SELECT
            apartments.apartmentId AS apartmentId,
            apartments.userId AS userId,
            apartments.address AS address,
            apartments.roomNumber AS roomNumber,
            COALESCE(COUNT(rooms.roomId), 0) AS rentedRoom
        FROM
            apartments
        LEFT JOIN
            rooms ON apartments.apartmentId = rooms.apartmentId
        WHERE
            1
        GROUP BY
            apartments.apartmentId, apartments.userId, apartments.address, apartments.roomNumber
        LIMIT ? OFFSET ?;`
        params = [recordPerPage, recordPerPage * Number(page - 1)]
    } else {
        sql = `
        SELECT
            apartments.apartmentId AS apartmentId,
            apartments.userId AS userId,
            apartments.address AS address,
            apartments.roomNumber AS roomNumber,
            COALESCE(COUNT(rooms.roomId), 0) AS rentedRoom
        FROM
            apartments
        LEFT JOIN
            rooms ON apartments.apartmentId = rooms.apartmentId
        WHERE
            userId = ?
        GROUP BY
            apartments.apartmentId, apartments.userId, apartments.address, apartments.roomNumber
        LIMIT ? OFFSET ?;`
        params = [userId, recordPerPage, recordPerPage * Number(page - 1)]
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
        apartments.address AS address,
        apartments.roomNumber AS roomNumber,
        apartments.tienNha AS tienNha,
        apartments.tienDien AS tienDien,
        apartments.tienNuoc AS tienNuoc,
        COALESCE(COUNT(rooms.roomId), 0) AS rentedRoom
    FROM
        apartments
    LEFT JOIN
        rooms ON apartments.apartmentId = rooms.apartmentId
    WHERE
        apartments.apartmentId=?
    GROUP BY
        apartments.apartmentId, apartments.userId, apartments.address, apartments.roomNumber;`
    params = [apartmentId]

    database.query(sql, params, (err, result) => {
        if (err) {
            return res.status(200).send({
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

const editApartment = (req, res) => {

    const apartmentId = req.body.apartmentId
    const address = req.body.apartmentInfo.address
    const roomNumber = req.body.apartmentInfo.roomNumber
    const tienNha = req.body.apartmentInfo.tienNha
    const tienDien = req.body.apartmentInfo.tienDien
    const tienNuoc = req.body.apartmentInfo.tienNuoc

    sql = `UPDATE apartments SET address=?, roomNumber=?, tienNha=?, tienDien=?, tienNuoc=? WHERE apartmentId=?;`
    params = [
        address, 
        roomNumber,
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

module.exports = {
    addApartment,
    deleteApartment,
    getApartmentList,
    getApartment,
    getApartmentImage,
    editApartment
}