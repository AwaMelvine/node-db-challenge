
exports.up = function (knex) {
    return knex.schema.createTable('contexts', table => {
        table.increments();
        table.text('name', 128).notNullable();
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('contexts');
};
