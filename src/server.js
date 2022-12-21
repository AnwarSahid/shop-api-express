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


app.get('/', (req, res) => {
    res.send('hello word')
})

const PORT = process.env.APP_PORT

app.listen(PORT, () => {
    console.log(`server running di ${PORT}`);
})



