const express = require("express")
const Tasks = require("./tasks_model")
const router = express.Router()


router.get('/', async (req, res, next) => {
    Tasks.find()
    .then(tasks => {
        res.json(tasks);
    })
})

router.get('/:id', (req, res) => {
    const { id } = req.params;

    Tasks.findById(id)
    .then(tasks => {
        res.json(tasks);
    })
})