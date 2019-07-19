const db = require('../data/db');

module.exports = {
    async get(id = null) {
        if (!id) {
            const projects = db('projects');
            return projects.map(project => ({
                ...project,
                completed: !!project.completed
            }));
        }

        const project = await db('projects').where({ id }).first();
        project.completed = !!project.completed;
        project.actions = await this.getProjectActions(id);
        return project;
    },

    async getProjectActions(id) {
        const actions = await db('actions').where('project_id', id);
        return actions;
    }
}