const jwt = require('jsonwebtoken')

const userMiddleware = (req, res, next) => {
    try {
        const token = req.headers['authorization'].split(' ')[1]
        jwt.verify(token, process.env.TOKEN_SECRET_KEY, (err, decode) => {
            if(err) {
                return res.status(200).send({
                    success: false,
                    message: 'Authentication Failed!'
                })
            } else {
                if(decode.role === 'user') {
                    req.body.authentication = {
                        userId: decode.userId,
                        role: decode.role
                    }
                    next()
                }
                else return res.status(200).send({
                    success: false,
                    message: 'Authentication Failed!'
                })
            }
        })
    } catch(err) {
        return res.status(200).send({
            success: false,
            message: 'Authentication Failed!'
        })
    }
}

module.exports = {
    userMiddleware
}