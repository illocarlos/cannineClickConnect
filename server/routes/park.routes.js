const router = require("express").Router()

const Park = require('../models/Park.model')

router.get('/parkList', (req, res, next) => {

    Park
        .find()
        .then(response => res.json(response))
        .catch(err => next(err))
})

router.get('/:park_id', (req, res, next) => {

    const { park_id } = req.params

    Park
        .findById(park_id)
        .then(response => res.json(response))
        .catch(err => next(err))

})

router.post('/newPark', (req, res, next) => {

    const { parkName, description } = req.body

    Park
        .create({ parkName, description })
        .then(response => res.json(response))
        .catch(err => next(err))
})


module.exports = router