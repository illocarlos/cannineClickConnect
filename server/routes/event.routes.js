const router = require("express").Router()
const { verifyToken } = require("../middlewares/verifyToken")

const {
    listEvent,
    eventId,
    newPark
} = require('./../controllers/event.controllers')

router.get('/list', listEvent)
router.get('/:event_id', eventId)
router.post('/newEvent', verifyToken, newPark)


module.exports = router