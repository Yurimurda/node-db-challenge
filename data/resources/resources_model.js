const db = require('../db-config')

module.exports = {
    find,
    findById
}

function find() {
    return db("resources")
}

function findById(id) {
    return db("resources").where({id})
}
