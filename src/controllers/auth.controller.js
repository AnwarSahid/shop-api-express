const config = require('../config/auth')
const db = require('../models/model')
const User = db.user
const bcrypt = require('bcryptjs')
const { response } = require('express')
const jwt = require('jsonwebtoken')


exports.register = (req, res) => {
    User.create({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password),
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


exports.login = (req, res) => {


    User.findOne({
        where: {
            email: req.body.email
        }
    })

        .then((user) => {
            if (!user) {
                res.status(401).json({ message: "user not found" })
            }

            let validPassword = bcrypt.compareSync(req.body.password, user.password)
            if (!validPassword) {
                return res.status(401).json({
                    message: "password incorrect",
                    token: null
                })
            }

            let token = jwt.sign({ id: user.id }, config.secret, { expiresIn: 86400 })

            res.status(201).json({
                id: user.id,
                name: user.name,
                email: user.email,
                token: token
            })

        }).catch((err) => {
            res.status(500).json({
                message: err.message
            })
        })



}