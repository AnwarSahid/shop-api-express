const jwt = require('jsonwebtoken')
const config = require('../config/auth')

verifyToken = (req, res, next) => {
    let token = req.headers['authorization']

    if (!token) {
        return res.status(403).json({
            message: 'no token auth'
        })
    }

    jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                message: "unauthorized"
            })
        }
        req.userId = decoded.id
        next()

    })
}


module.exports = {
    verifyToken,
}