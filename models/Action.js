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
        action.contexts = await this.getActionContexts(action.id);
        return action;
    },

    async getActionContexts(action_id) {
        const contexts = await db.select('contexts.id', 'contexts.name')
            .from('contexts')
            .join('action_context', 'contexts.id', 'action_context.context_id')
            .join('actions', 'actions.id', 'action_context.action_id')
            .where('actions.id', action_id);

        return contexts;
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