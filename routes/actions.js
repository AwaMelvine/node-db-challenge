const { Router } = require('express');
const Action = require('../models/Action');
const router = new Router();

router.get('/', async (req, res) => {
    try {
        const actions = await Action.get();
        res.status(200).json({ data: actions });
    } catch (error) {
        res.status(500).json({ error: 'Failed to get actions' })
    }
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const actions = await Action.get(id);
        res.status(200).json({ data: actions });
    } catch (error) {
        res.status(500).json({ error: 'Failed to get actions' })
    }
});

router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const action = await Action.update(req.body, id);
        res.status(200).json({ data: action });
    } catch (error) {
        res.status(500).json({ error: 'Failed to update action' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const count = await Action.remove(id);
        res.status(200).json({ data: count });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete action' });
    }
});


module.exports = router;