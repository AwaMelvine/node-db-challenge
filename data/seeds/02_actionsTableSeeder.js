
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('actions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        { id: 1, project_id: 1, notes: 'Collaborate well', description: 'Communication is key', completed: false },
        { id: 2, project_id: 1, notes: 'Get your team to do stretch', description: 'Discuss it thoroughly to understand it', completed: false },
        { id: 3, project_id: 2, notes: 'Revise extensively', description: 'Especially frontend stuff.', completed: false }
      ]);
    });
};
