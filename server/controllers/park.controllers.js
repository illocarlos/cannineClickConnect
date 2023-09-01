const Park = require('../models/Park.model')

const listPark = (req, res, next) => {

    Park
        .find()
        // TODO: REVISAR ENDPOINTS QUE PUEDAN SER PROYECTADOS U ORDENADOS
        .then(response => res.json(response))
        .catch(err => next(err))
}

const parkId = (req, res, next) => {

    const { park_id } = req.params

    Park
        .findById(park_id)
        .then(response => res.json(response))
        .catch(err => next(err))

}

const newPark = (req, res, next) => {

    const { name, description, gallery, size, crowdedness, open } = req.body

    // TODO: REVISAR ENDPOINTS RESOLUBLES CON ESTADOS HTTP

    Park
        .create({ name, description, gallery, size, crowdedness, open })
        .then(() => res.sendStatus(201))
        .catch(err => next(err))
}
module.exports = {
    newPark,
    parkId,
    listPark

}