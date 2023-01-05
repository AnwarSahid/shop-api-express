const db = require('../models/model')
const config = require('../config/auth')
const User = db.user
const bcrypt = require('bcryptjs')


exports.register = (req, res) => {
    User.create({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password)
    })
        .then((user) => {
            res.status(201).json({
                message: "user was registered successfuly",
                data: user
            })
        }).catch((err) => {
            res.status(500).json({
                message: err
            })
        })
}