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


module.exports = router;