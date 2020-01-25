
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, project_name: 'test', project_description: 'test', completed: false},
        {id: 2, project_name: 'test', project_description: 'test', completed: false},
        {id: 3, project_name: 'test', project_description: 'test', completed: false},
      ]);
    });
};