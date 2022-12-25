const db = require('../model')

const User = db.user

exports.userSeed = () => {
    User.create({
        name: 'Anwar Sahid',
        email: 'anwar@gmail.com',
        phone: '0816514372213',
        password: 'sdasdsadasdsadasd'
    })
}