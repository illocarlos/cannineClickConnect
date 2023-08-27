const router = require("express").Router()
const User = require('../models/User.model')
const bcrypt = require('bcryptjs')
const saltRounds = 10




router.post('/signup', (req, res, next) => {

    const { username, email, password } = req.body

    if (password.length < 2) {
        res.status(400).json({ message: "pasword must have at least 3 character" })

    }

    User
        .find({ email })
        .then((foundUser) => {
            if (foundUser) {
                res.status(400).json({ message: "user already exist" })
            }
        })

    const salt = bcrypt.genSaltSync(saltRounds)
    const hashedPassword = bcrypt.hashSync(password, salt)
    return User.create({ email, password: hashedPassword, username })
        .then(() => res.sendStatus(201))
        .catch(err => next(err))

})





module.exports = router