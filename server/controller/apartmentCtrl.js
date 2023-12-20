const database = require('../config/database')

const addApartment = (req, res) => { // Thêm 1 căn hộ
    const address = req.body.address
    const roomNumber = req.body.roomNumber

    if (address === '' || address === undefined || address === null) {
        return res.status(200).send({
            success: false,
            message: 'Sai address!'
        })
    }

    if (roomNumber === '' || roomNumber === undefined || roomNumber === null) {
        return res.status(200).send({
            success: false,
            message: 'Sai roomNumber!'
        })
    }

    sql = `INSERT INTO apartments (userId, address, roomNumber, createDate) VALUES (?, ?, ?, ?);`
    params = [req.body.authentication.userId, address, roomNumber, Date.now()]

    database.query(sql, params, (err, result) => {
        if (err) {
            return res.status(200).send({
                success: false,
                message: err.message
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

}

const getUserApartmentList = (req, res) => { // Lấy danh sách căn hộ của 1 user

}

module.exports = {
    addApartment,
    deleteApartment,
    getApartmentList,
    getUserApartmentList
}