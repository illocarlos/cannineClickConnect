const router = require("express").Router()
const { verifyToken } = require("../middlewares/verifyToken")

const {
    listUsers,
    userId,
    deleteUser,
} = require('./../controllers/user.controllers')

router.get('/list', listUsers)

router.get('/:user_id', userId)

router.delete('/delete/:user_id', deleteUser)

module.exports = router