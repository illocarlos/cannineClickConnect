const router = require("express").Router()


const {
    ListDog,
    dogId,
    newDog,
    addDogToUser
} = require('../controllers/dog.controllers')

router.post('/newDog', newDog)
router.post('/addDogToUser', addDogToUser)
router.get('/:dog_id', dogId)
router.get('/list', ListDog)

module.exports = router