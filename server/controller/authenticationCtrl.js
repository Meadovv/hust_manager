const database = require('../config/database')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const login = (req, res) => {
    const username = req.body.username
    const password = req.body.password

    if (username === '' || username === undefined || username === null) {
        return res.status(200).send({
            success: false,
            message: 'Sai username!'
        })
    }

    if (password === '' || password === undefined || password === null) {
        return res.status(200).send({
            success: false,
            message: 'Sai password!'
        })
    }

        // Kiểm tra xem username đã tồn tại trong db hay chưa
    sql = 'SELECT * FROM users WHERE username = ?'
    params = [username]

    database.query(sql, params,async (err, result) => {
        if (err) {
            return res.status(200).send({
                success: false,
                message: err.message
            })
        }
        if (result.length > 0) {
            const user = result[0]
            const isMatch = await bcrypt.compare(password, user.password)

            if(!isMatch) {
                return res.status(200).send({
                    success: false,
                    message: 'Mật khẩu không đúng'
                })
            }

            const token = jwt.sign({
                userId: user.userId,
                role: user.role
            },
            process.env.TOKEN_SECRET_KEY,
            {
                expiresIn: process.env.TOKEN_SECRET_EXPIRED
            })

            return res.status(200).send({
                success: true,
                message: 'Logged in!',
                token: token
            })
        } else {
            return res.status(200).send({
                success: false,
                message: 'Tên người dùng không tồn tại'
            })
        }
    })
}

const register = (req, res) => {
    const username = req.body.username
    const password = req.body.password
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const dob = req.body.dob
    const role = req.body.role

    let sql, params

    // Kiểm tra thông tin

    if (username === '' || username === undefined || username === null) {
        return res.status(200).send({
            success: false,
            message: 'Sai username!'
        })
    }

    if (password === '' || password === undefined || password === null) {
        return res.status(200).send({
            success: false,
            message: 'Sai password!'
        })
    }

    if (firstName === '' || firstName === undefined || firstName === null) {
        return res.status(200).send({
            success: false,
            message: 'Sai firstName!'
        })
    }

    if (lastName === '' || lastName === undefined || lastName === null) {
        return res.status(200).send({
            success: false,
            message: 'Sai lastName!'
        })
    }

    if (dob === '' || dob === undefined || dob === null) {
        return res.status(200).send({
            success: false,
            message: 'Sai dob!'
        })
    }

    if (role === '' || role === undefined || role === null) {
        return res.status(200).send({
            success: false,
            message: 'Sai role!'
        })
    }

    // Kiểm tra xem username đã tồn tại trong db hay chưa
    sql = 'SELECT * FROM users WHERE username = ?'
    params = [username]

    database.query(sql, params, async (err, result) => {
        if (err) {
            return res.status(200).send({
                success: false,
                message: err.message
            })
        }
        if (result.length > 0) {
            return res.status(200).send({
                success: false,
                message: 'Tên người dùng đã tồn tại'
            })
        }

        // Mã hóa mật khẩu
        const hashKey = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, hashKey)

        // Insert Data
        sql = `INSERT INTO users (username, password, firstName, lastName, dob, role, createDate) VALUES (?, ?, ?, ?, ?, ?, ?);`
        params = [username, hashedPassword, firstName, lastName, dob, role, Date.now()]

        database.query(sql, params, (err, result) => {
            if (err) {
                return res.status(200).send({
                    success: false,
                    message: err.message
                })
            }
            return res.status(200).send({
                success: true,
                message: 'Người dùng đã được tạo',
                userId: result.insertId
            })
        })
    })
}

const verify = (req, res) => {
    let userId = req.body.userId
    if(userId === null || userId === undefined || userId === '') {
        userId = req.body.authentication.userId
    }

    sql = 'SELECT * FROM users WHERE userId = ?'
    params = [Number(userId)]

    database.query(sql, params,async (err, result) => {
        if (err) {
            return res.status(200).send({
                success: false,
                message: err.message
            })
        }
        if (result.length > 0) {
            const user = result[0]
            user.password = undefined
            return res.status(200).send({
                success: true,
                message: 'Success!',
                user: user
            })
        } else {
            return res.status(200).send({
                success: false,
                message: 'Người dùng không tồn tại'
            })
        }
    })
}

module.exports = {
    login,
    register,
    verify
}