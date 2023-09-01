const router = require("express").Router()

const {
    listPark,
    parkId,
    newPark,
} = require('../controllers/park.controllers')

router.get('/list', listPark)

router.get('/:park_id', parkId)

router.post('/newPark', newPark)


module.exports = router