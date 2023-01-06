const db = require('../models/model')
const User = db.user

userIsExists = (req, res, next) => {
    User.findOne({
        where: {
            email: req.body.email,
        },
    }).then((user) => {
        if (user) {
            res.status(400).json({
                message: 'email already exisdajhyagusvahbj'
            })

            return
        }
        next()
    })
}

module.exports = {
    userIsExists
}