const db = require('../data/db');

module.exports = {
    async get(id = null) {
        if (!id) {
            return db('projects');
        }
        
        const projects = await db('projects').where({ id }).first();
        projects.actions = this.getProjectActions(id);
        return projects;
    },

    async getProjectActions(id) {
        const actions = await db('actions').where({ project_id: id });
        return actions;
    }
}