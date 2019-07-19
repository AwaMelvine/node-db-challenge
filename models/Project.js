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
        return actions.map(action => ({
            ...action,
            completed: !!action.completed
        }));
    },

    async add(project) {
        const [id] = await db("projects").insert(project);
        return this.get(id);
    },

    async update(changes, id) {
        const count = await db('projects').where('id', id).update(changes);
        return (count > 0 ? this.get(id) : null);
    },

    async remove(id) {
        const count = await db('projects').where('id', id).del();
        return count;
    }
}