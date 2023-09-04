const router = require("express").Router()


const {

    newDog,
    dogId,
    ListDog

} = require('../controllers/dog.controllers')

router.get('/newDog', newDog)

router.get('/:dog_id', dogId)

router.get('/list', ListDog)

module.exports = router