const router = require("express").Router()
const imageMiddlewares = require("../middlewares/uploader.middlewares")



router.post('/image', imageMiddlewares.single('imageData'), (req, res) => {

    if (!req.file) {
        res.status(500).json({ errorMessage: 'Error caragndo el archivo' })
        return
    }

    res.json({ cloudinary_url: req.file.path })
})


router.post('/images', imageMiddlewares.array('imagesData', 12), (req, res) => {

    if (!req.files) {
        res.status(500).json({ errorMessage: 'Error caragndo el archivo' })
        return
    }

    const urls = req.files.map(file => file.path)

    res.json({ cloudinary_urls: urls })
})

module.exports = router