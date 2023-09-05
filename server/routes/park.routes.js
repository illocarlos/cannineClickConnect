const router = require("express").Router()
const { verifyToken } = require("../middlewares/verifyToken")


const {
    listPark,
    parkId,
    newPark,
    deletePark,
} = require('../controllers/park.controllers')


router.get('/list', listPark)

router.get('/:park_id', parkId)

router.post('/newPark', newPark)

router.post('/delete/:park_id', verifyToken, deletePark)


module.exports = router