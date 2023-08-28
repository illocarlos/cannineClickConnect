const router = require("express").Router()
const User = require('../models/User.model')

router.get('/list', (req, res, next) => {
    
    User
        .find()
        .then(response => res.json(response))
        .catch(err=>next(err))


})

module.exports=router