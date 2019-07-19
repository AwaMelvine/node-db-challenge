
exports.up = function (knex) {
    return knex.schema.createTable('action_context', table => {
        table.increments();
        table.integer('action_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('actions')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        table.integer('context_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('contexts')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        table.unique(['action_id', 'context_id']);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('action_context');
};
