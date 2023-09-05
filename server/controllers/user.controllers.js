const User = require('../models/User.model')

const listUsers = (req, res, next) => {

    User
        .find()
        // : PROYECTAR CON SELECT LOS FIND QUE PROCEDAN
        .sort({ name: 1 }) //Fuera de MVP -> Añadir buscador por nombre?
        .then(response => res.json(response))
        .catch(err => next(err))
}

const userId = (req, res, next) => {

    const { user_id } = req.params

    User
        .findById(user_id)
        .populate('dogs')
        .then(response => res.json(response))
        .catch(err => next(err))
}


const editUser = (req, res, next) => {

    const { user_id } = req.params
    const { userData } = req.body

    User
        .findByIdAndUpdate(user_id, userData)
        .then(() => res.sendStatus(201))
        .catch(err => next(err))
}

const deleteUser = (req, res, next) => {

    const { user_id } = req.params

    User
        .findByIdAndDelete(user_id)
        .then(() => res.sendStatus(204))
        .catch((err) => next(err))
}


module.exports = {
    userId,
    listUsers,
    deleteUser,
    editUser
}