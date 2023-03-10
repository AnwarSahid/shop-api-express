const controller = require('../controllers/auth.controller')
const middleware = require('../middleware/middleware')



module.exports = (app) => {
    app.use(function (req, res, next) {
        res.header(
            'Access-Control-Allow-Headers',
            'authorization, Origin, Content-Type, Accept'
        )
        next()
    })

    app.post('/api/auth/register', middleware.userIsExists, controller.register)
    app.post('/api/auth/login', controller.login)
} 