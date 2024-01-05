const express = require('express')
const morgan = require('morgan')
const dotenv = require('dotenv')
dotenv.config()

const database = require('./config/database')


const app = express()
app.use(express.json({
    limit: '5mb'
}))
app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.status(200).send({
        success: true,
        message: 'Server is running!'
    })
})

app.use('/authentication', require('./routers/authenticationRoute'))

app.use('/apartment', require('./routers/apartmentRoute'))

app.use('/room', require('./routers/roomRoute'))

app.listen(process.env.SERVER_POST, () => {
    console.log(`Server is running on POST ${process.env.SERVER_POST}`)
})
