const User = require('../models/User.model')

const listUsers = (req, res, next) => {

    User
        .find()
        .then(response => res.json(response))
        .catch(err => next(err))
}
const userId = (req, res, next) => {

    const { user_id } = req.params
    User
        .findById(user_id)
        .then(response => res.json(response))
        .catch(err => next(err))
}
module.exports = {
    userId,
    listUsers
}