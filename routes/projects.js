const { Router } = require('express');
const Project = require('../models/Project');
const router = new Router();

router.get('/', async (req, res) => {
    try {
        const projects = await Project.get();
        res.status(200).json({ data: projects });
    } catch (error) {
        res.status(500).json({ error: 'Failed to get projects' })
    }
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const projects = await Project.get(id);
        res.status(200).json({ data: projects });
    } catch (error) {
        res.status(500).json({ error: 'Failed to get projects' })
    }
});

router.post('/', async (req, res) => {
    try {
        const project = await Project.add(req.body);
        res.status(200).json({ data: project });
    } catch (error) {
        res.status(500).json({ error: 'Failed to create new project' });
    }
});

router.post('/:id/actions', async (req, res) => {
    try {
        const { id } = req.params;
        const { body } = req;
        const action = {
            ...body,
            project_id: id
        };

        const projects = await Project.addAction(action);

        res.status(200).json({ data: projects });
    } catch (error) {
        res.status(500).json({ error: 'Failed to add action' })
    }
});


module.exports = router;