const Dog = require('../models/Dog.model')

const ListDog = (req, res, next) => {

    Dog
        .find()
        .then(response => res.json(response))
        .catch(err => next(err))
}

const dogId = (req, res, next) => {

    const { dog_id } = req.params

    Dog
        .findById(dog_id)
        .then(response => res.json(response))
        .catch(err => next(err))

}

const newDog = (req, res, next) => {

    const { name, description, image, age, size, gender, castrated } = req.body


    Dog
        .create({ name, description, image, age, size, gender, castrated })
        .then((response) => res.json())
        .catch(err => next(err))
}
module.exports = {
    newDog,
    dogId,
    ListDog

}