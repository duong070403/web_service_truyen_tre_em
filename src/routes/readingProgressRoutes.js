const express = require('express');
const router = express.Router();
const ReadingProgressController = require('../controllers/readingProgressController');

router.post('/', ReadingProgressController.createReadingProgress);
router.get('/:userId/:storyId', ReadingProgressController.getReadingProgressByUserAndStory);
router.put('/:id', ReadingProgressController.updateReadingProgress);
router.delete('/:id', ReadingProgressController.deleteReadingProgress);

module.exports = router;
