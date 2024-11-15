const express = require('express');
const router = express.Router();

// Import các route cụ thể
const storiesRoutes = require('./storiesRoutes');
const authorsRoutes = require('./authorsRoutes');
const genresRoutes = require('./genresRoutes');
const usersRoutes = require('./usersRoutes');
const commentsRoutes = require('./commentsRoutes');
const bookmarksRoutes = require('./bookmarksRoutes');
const readingProgressRoutes = require('./readingProgressRoutes');

// Sử dụng các route cho từng controller
router.use('/stories', storiesRoutes);
router.use('/authors', authorsRoutes);
router.use('/genres', genresRoutes);
router.use('/users', usersRoutes);
router.use('/comments', commentsRoutes);
router.use('/bookmarks', bookmarksRoutes);
router.use('/reading-progress', readingProgressRoutes);

module.exports = router;
