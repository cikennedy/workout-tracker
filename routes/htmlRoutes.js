const router = require('express').Router();
const path = require("path");

// '/' should return the `index.html` file.
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// `/exercise` should return the `exercise.html` file.
router.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/exercise.html'));
});

// `/stats` should return the `exercise.html` file.
router.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/stats.html'));
});

module.exports = router;