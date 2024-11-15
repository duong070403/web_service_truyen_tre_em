const express = require('express');
const router = express.Router();
const { addReadingTime } = require('../controllers/readingTimesController');

router.post('/', addReadingTime);

module.exports = router;
