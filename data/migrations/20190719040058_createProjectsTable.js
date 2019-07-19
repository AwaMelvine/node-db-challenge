
exports.up = function (knex) {
    return knex.schema.createTable('projects', table => {
        table.increments();
        table.text('name', 128).unique().notNullable();
        table.text('description');
        table.boolean('completed').defaultTo(false);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('projects');
};
