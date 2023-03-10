const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')

const app = express()
dotenv.config()



var corsOptions = {
    origin: 'http://localhost:5000',
}


app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

// manggil semua model. model dari user dan miggrasi
const db = require('./models/model')
const seed = require('./models/seeds/seeder')
db.sequelize
    // .sync({ force: true }) 
    .sync()
    .then(() => {
        // seed.userSeed()
        // seed.categorySeed()

        console.log("berhasil");
    })
    .catch((err) => {
        console.error(`connection failed + ${err}`);
    })


app.get('/', (req, res) => {
    res.json({
        massage: "server is running",
        version: "shop versi beta"
    })
})

require('./routes/auth.route')(app)
require('./routes/profile.route')(app)
require('./routes/product.route')(app)


const PORT = process.env.APP_PORT //mengambil port dari env

app.listen(PORT, () => {
    console.log(`server running di ${PORT}`);
})



