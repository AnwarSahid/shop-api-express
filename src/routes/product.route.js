const controller = require('../controllers/product.controller')
const middleware = require('../middleware/middleware')

module.exports = (app) => {
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Headers',
            'authorization, Origin, Content-Type, Accept')
        next()
    })

    app.get('/api/product', middleware.verifyToken, controller.index)
    app.post('/api/product', middleware.verifyToken, controller.create)
    app.get('/api/product/:id', middleware.verifyToken, controller.show)
    app.put('/api/product/:id', middleware.verifyToken, controller.update)
    app.delete('/api/product/:id', middleware.verifyToken, controller.delete)
}