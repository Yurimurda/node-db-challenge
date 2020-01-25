
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, project_id: 1 , task_description: 'test', completed: false},
        {id: 1, project_id: 2 , task_description: 'test', completed: false},
        {id: 1, project_id: 3 , task_description: 'test', completed: false},
        {id: 2, project_id: 1 , task_description: 'test', completed: false},
        {id: 2, project_id: 2 , task_description: 'test', completed: false},
        {id: 2, project_id: 3 , task_description: 'test', completed: false},
        {id: 3, project_id: 1 , task_description: 'test', completed: false},
        {id: 3, project_id: 2 , task_description: 'test', completed: false},
        {id: 3, project_id: 3 , task_description: 'test', completed: false}
      ]);
    });
};