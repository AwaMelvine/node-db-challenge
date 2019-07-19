const express = require('express');
const app = express();

app.use(express.json());


app.get('/', async (req, res) => {
    res.status(200).json({ message: "See projects at /api/projects" });
});

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server running on localhost:${port}`));