
exports.up = function(knex) {
    return knex.schema
    .createTable('project', tbl =>{
        tbl.increments();
        
    })
  
};

exports.down = function(knex) {
  
};