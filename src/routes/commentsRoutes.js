const express = require('express');
const router = express.Router();
const CommentsController = require('../controllers/commentsController');

router.post('/', CommentsController.createComment);
router.get('/:storyId', CommentsController.getCommentsByStoryId);
router.delete('/:id', CommentsController.deleteComment);

module.exports = router;
