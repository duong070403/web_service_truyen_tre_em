const express = require('express');
const router = express.Router();
const { getCommentsByStoryId, postComment } = require('../controllers/commentsController');

// Lấy danh sách bình luận theo ID truyện
router.get('/:story_id', getCommentsByStoryId);

// Gửi bình luận mới
router.post('/', postComment);

module.exports = router;
