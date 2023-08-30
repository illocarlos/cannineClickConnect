const router = require("express").Router()
const imageMiddlewares = require("../middlewares/uploader.middlewares")



router.post('/image', imageMiddlewares.single('imageData'), (req, res) => {

    if (!req.file) {
        res.status(500).json({ errorMessage: 'Error caragndo el archivo' })
        return
    }

    res.json({ cloudinary_url: req.file.path })
})


module.exports = router