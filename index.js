const express = require("express")
const server = express()
const ProjectRouter = require("./data/projects/project_router")
const ResourcesRouter = require("./data/resources/resources_router")
const TasksRouter = require("./data/tasks/tasks_router")
server.use(express.json())

server.use('/projects', ProjectRouter)
server.use('/resources', ResourcesRouter)
server.use('/tasks', TasksRouter)
server.get('/', (req, res) => {
    return res.json({message: "This COOL project is COOL"})
})

const PORT = 5000
server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})