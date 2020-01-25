const express = require('express')
const Project = require ('./project_model')
const router = express.Router()

router.get('/', async (req, res, next) => {
    Project.find()
    .then(projects => {
        res.json(projects);
    })
})

router.get('/:id', (req, res) => {
    const { id } = req.params;

    Project.findById(id)
    .then(projects => {
        res.json(projects);
    })
})