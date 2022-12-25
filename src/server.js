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
db.sequelize
    .sync({ force: true }) //drop table
    .then(() => {
        console.log("berhasil");
    })
    .catch((err) => {
        console.error(`connection failed`);
    })


app.get('/', (req, res) => {
    res.send('hello word')
})


const PORT = process.env.APP_PORT //mengambil port dari env

app.listen(PORT, () => {
    console.log(`server running di ${PORT}`);
})



