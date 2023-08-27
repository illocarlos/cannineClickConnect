const router = require("express").Router()
const User = require('../models/User.model')
const bcrypt = require('bcryptjs')


router.get('/create', (req, res, next) => {
    res.render('auth/create')
})


router.post('/create', cloudinary.single('image'), (req, res, next) => {

    const { username, email, birthday, gender, password } = req.body

    const { path: image } = req.file

    

    bcrypt
        .genSalt(saltRounds)
        .then(salt => bcrypt.hash(password, salt))
        .then(hash => User.create({ username, email, birthday, gender, password: hash, image }))
        .then(res.redirect('/'))
        .catch(err => next(err))

})


module.exports = router