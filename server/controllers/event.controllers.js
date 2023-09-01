const Event = require('../models/Event.model')

const listEvent = (req, res, next) => {

    Event
        .find()
        .then(response => res.json(response))
        .catch(err => next(err))
}

const eventId = (req, res, next) => {

    const { event_id } = req.params

    Event
        .findById(event_id)
        .then(response => res.json(response))
        .catch(err => next(err))

}

const newPark = (req, res, next) => {


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
}


module.exports = {
    listEvent,
    eventId,
    newPark
}