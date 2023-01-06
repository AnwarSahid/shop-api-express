const db = require('../models/model')
const Product = db.product

exports.index = (req, res) => {
    Product.findAll({
        where: {
            user_id: req.userId
        }
    }).then((result) => {
        res.status(201).json({
            message: "data collected successfully",
            data: result

        })
    }).catch((err) => {
        res.status(500).json({
            message: err.message
        })
    });
}

exports.show = (req, res) => {
    const id = req.params.id

    Product.findByPk(id)
        .then((result) => {
            if (!result) {
                res.status(201).json({
                    message: "data null",
                    data: null
                })
            } else {
                res.status(201).json({
                    message: "data collected successfully",
                    data: result
                })
            }
        }).catch((err) => {
            res.status(500).json({
                message: err.message
            })

        });
}

exports.create = (req, res) => {
    if (!req.body.title) {
        return res.status(500).json({
            message: "title not nullable"
        })
    }

    const attr = {
        user_id: req.userId,
        ...req.body
    }

    Product.create(attr).then((result) => {
        res.status(201).json({
            message: "data successfuly created",
            data: {
                result
            }
        })
    }).catch((err) => {
        res.status(500).json({
            message: err.message
        })
    });
}

exports.update = (req, res) => {
    const id = req.params.id

    Product.update(req.body, {
        where: { id: id }
    }).then((num) => {
        if (num == 1) {
            res.status(200).json({
                message: "data successfuly updated",
                num: num
            })
        } else {
            res.status(400).json({
                message: "data cannot updated",
                num: num
            })
        }
    }).catch((err) => {
        res.status(400).json({
            message: err.message,

        })
    });
}