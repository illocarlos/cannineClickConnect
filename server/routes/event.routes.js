const router = require("express").Router()

const Event = require('../models/Event.model')

router.get('/eventList', (req, res, next) => {

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

router.post('/newEvent', (req, res, next) => {

    const { title } = req.body

    Park
        .create({ title })
        .then(response => res.json(response))
        .catch(err => next(err))
})


module.exports = router