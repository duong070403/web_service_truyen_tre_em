const express = require('express');
const router = express.Router();
const BookmarksController = require('../controllers/bookmarksController');

router.post('/', BookmarksController.createBookmark);
router.get('/:userId', BookmarksController.getBookmarksByUserId);
router.delete('/:id', BookmarksController.deleteBookmark);

module.exports = router;
