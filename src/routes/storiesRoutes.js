const express = require('express');
const router = express.Router();
const StoriesController = require('../controllers/storiesController');

router.post('/', StoriesController.createStory);
router.get('/', StoriesController.getStories);
router.get('/:id', StoriesController.getStoryById);
router.put('/:id', StoriesController.updateStory);
router.delete('/:id', StoriesController.deleteStory);

module.exports = router;
