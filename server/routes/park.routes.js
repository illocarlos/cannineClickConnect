const router = require("express").Router()

const Park = require('../models/Park.model')

router.get('/list', (req, res, next) => {

    Park
        .find()
        // TODO: REVISAR ENDPINTS QUE PUEDAN SER PROYECTADOS U ORDENADOS
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

    const { name, description, gallery, size, crowdedness, open } = req.body

    // TODO: REVISAR ENDPOINTS RESOLUBLES CON ESTADOS HHTTP

    Park
        .create({ name, description, gallery, size, crowdedness, open })
        .then(() => res.sendStatus(201))
        .catch(err => next(err))
})


module.exports = router