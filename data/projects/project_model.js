const db = require('../dbConfig');


module.exports = {
    find,
    findById
};


function find() {
    return db('project')
};

function findById(id) {
    return db('project')
    .join('tasks', 'task.project_id', 'project.id')
    .where ('projects.id', id)
};

