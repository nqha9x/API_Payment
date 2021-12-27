const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()
const paymentRoute = require('./routes/payment.js')

const PUBLIC_KEY = 'pk_test_51KAYJvGWileRMjCPdsDsuAN8eRLiEfLd0lXTRP8ITIUv55MshyGuM6JenyoRPL5eiWXGSbW8qdcPBP8GdYrTaPKV00g7zIDQOL'
const SECRET_KEY = 'sk_test_51KAYJvGWileRMjCPsGLY5GUlIy4ABdEcwS6pvoJHqbfjs80TbwRXsoVtZgfp6sRltP3GV0OtSk03AHk0ZG077Zf600MmRKo67B'
const stripe  = require('stripe') (SECRET_KEY)

const port = 1999 || process.env.PORT

app.use(bodyParser.urlencoded ({extended:false}))
app.use(bodyParser.json())

app.set('view engine','ejs')

app.get('/',(req,res) => {
    res.render('Home', {
        key: PUBLIC_KEY
    })
})

app.use('/', paymentRoute)

app.listen(port, () => {
    console.log(`SERVER is listening on PORT: http://localhost:${port}`)
})