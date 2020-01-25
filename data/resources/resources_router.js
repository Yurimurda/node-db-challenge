const express = require("express")
const Resources = require("./resources_model")
const router = express.Router()

router.get('/', async (req, res, next) => {
    Resources.find()
    .then(resources => {
        res.json(resources);
    })
})

router.get('/:id', (req, res) => {
    const { id } = req.params;

    Resources.findById(id)
    .then(resources => {
        res.json(resources);
    })
})