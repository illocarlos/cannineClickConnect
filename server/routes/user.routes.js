const router = require("express").Router()

const {
    listUsers,
    userId,

} = require('./../controllers/user.controllers')

router.get('/list', listUsers)
router.get('/:user_id', userId)

module.exports = router