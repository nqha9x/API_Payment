const express = require('express')
const router = express.Router()

const SECRET_KEY = 'sk_test_51KAYJvGWileRMjCPsGLY5GUlIy4ABdEcwS6pvoJHqbfjs80TbwRXsoVtZgfp6sRltP3GV0OtSk03AHk0ZG077Zf600MmRKo67B'
const stripe  = require('stripe') (SECRET_KEY)

router.post('/payment', (req, res) => {
    stripe.customers.create({
        email:req.body.stripeEmail,
        source:req.body.stripeToken,
        name: 'Nguyen ha',
        address:{
            line1:'Hanoi, Vietnam',
            postal_code: 100000,
            city: 'Hanoi',
            state: 'Chuong My',
            country: 'Vietnam'
        }
    })
    .then((customer) => {
        return stripe.charges.create({
            amount:5000,
            description: 'Web Product',
            currency: 'USD',
            customer: customer.id
        })
    })
    .then ((charge) => {
        console.log (charge)
        res.send('Success!')
    }) 
    .catch((err) => {
        res.send(err)
    })
})

module.exports = router