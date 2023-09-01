const router = require("express").Router()
const { verifyToken } = require("../middlewares/verifyToken")
const Event = require('../models/Event.model')

router.get('/list', (req, res, next) => {

    Event
        .find()
        .then(response => res.json(response))
        .catch(err => next(err))
})

router.get('/:event_id', (req, res, next) => {

    const { event_id } = req.params

    Event
        .findById(event_id)
        .then(response => res.json(response))
        .catch(err => next(err))

})

router.post('/newEvent', verifyToken, (req, res, next) => {


    const { title, description, cover, date, attendees, address: { street, number, zipcode, city, country } } = req.body

    
    const { _id: owner } = req.payload

    Event
        .create({
            title,
            description,
            cover,
            date,
            attendees,
            owner,
            address: {
                street,
                number,
                zipcode,
                city,
                country
            }
        })
        .then(() => res.sendStatus(200))
        .catch(err => next(err))
})


module.exports = router