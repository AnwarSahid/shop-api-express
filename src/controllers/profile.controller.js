const db = require('../models/model')
const User = db.user


exports.profile = (req, res) => {
    User.findByPk(req.userId).then((user) => {
        res.status(200).json({
            message: " data profile successfuly",
            data: {
                name: user.name,
                email: user.email,
                phone: user.phone
            }
        })
    }).catch((err) => {
        res.status(400).json({
            message: err.message
        })
    });
}