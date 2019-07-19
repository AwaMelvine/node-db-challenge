
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { id: 1, name: 'Spring Challenge', description: 'Do it in 3 hours', completed: false },
        { id: 2, name: 'Build week project', description: 'Do it in 7 days', completed: false },
        { id: 3, name: 'Labs project', description: 'Be professional about it', completed: false }
      ]);
    });
};
