exports.up = async function(knex) {
    await knex.schema.createTable('project', (tbl) => {
        tbl.increments('id')
        tbl.string('project_name').notNullable()
        tbl.string('project_description')
        tbl.boolean('completed').notNullable()
    })

    await knex.schema.createTable('resources', (tbl) =>  {
        tbl.increments('id')
        tbl.string('resource_name').notNullable().unique()
        tbl.string('resource_description')
    })

    await knex.schema.createTable('tasks', (tbl) =>  {
        tbl.increments('id')
        tbl.integer('project_id')
            .notNullable()
            .references('id')
            .inTable('project')
            tbl.string('task_description').notNullable()
            tbl.string('notes')
            tbl.boolean('completed')
            .notNullable()
            .defaultTo(false)
    })

    await knex.schema.createTable('project_resources', (tbl) =>  {
        tbl.integer('project_id')
            .references('id')
            .inTable('project')
            tbl.integer('resource_id')
            .references('id')
            .inTable('resources')
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('project_resources')
    await knex.schema.dropTableIfExists('tasks')
    await knex.schema.dropTableIfExists('resources')
    await knex.schema.dropTableIfExists('project')
};