const router = require("express").Router()
const { verifyToken } = require("../middlewares/verifyToken")

const {
    listEvent,
    eventId,
    newEvent,
    deleteEvent,
} = require('./../controllers/event.controllers')

router.get('/list', listEvent)
router.get('/:event_id', eventId)
router.post('/newEvent', verifyToken, newEvent)
router.put('/edit/:event_id', verifyToken, eventId)
router.delete('/delete/:event_id', verifyToken, deleteEvent)


module.exports = router