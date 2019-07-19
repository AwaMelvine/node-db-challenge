
exports.up = function (knex) {
    return knex.schema.createTable('actions', table => {
        table.increments();
        table.text('notes', 128).notNullable();
        table.text('description');
        table.boolean('completed').defaultTo(false);
        table.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('actions');
};
