const router = require("express").Router()
const { verifyToken } = require("../middlewares/verifyToken")

const {
    listUsers,
    userId,
    deleteUser,
    editUser,
    addUserToEvent,
} = require('./../controllers/user.controllers')

router.get('/list', listUsers)

router.get('/:user_id', userId)

router.post('/edit/:user_id', verifyToken, editUser)

router.delete('/delete/:user_id', verifyToken, deleteUser)

router.post('/addUserToEvent', addUserToEvent)

module.exports = router