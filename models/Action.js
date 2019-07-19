const db = require('../data/db');

module.exports = {
    async get(id = null) {
        if (!id) {
            const actions = db('actions');
            return actions.map(action => ({
                ...action,
                completed: !!action.completed
            }));
        }

        const action = await db('actions').where({ id }).first();
        action.completed = !!action.completed;
        return action;
    },

    async update(changes, id) {
        const count = await db('actions').where('id', id).update(changes);
        return (count > 0 ? this.get(id) : null);
    },

    async remove(id) {
        const count = await db('actions').where('id', id).del();
        return count;
    }
}