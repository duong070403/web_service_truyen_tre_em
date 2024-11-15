const BookmarksModel = require('../models/bookmarksModel');

const BookmarksController = {
  createBookmark: async (req, res) => {
    try {
      const bookmarkId = await BookmarksModel.createBookmark(req.body);
      res.status(201).json({ id: bookmarkId });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getBookmarksByUserId: async (req, res) => {
    try {
      const bookmarks = await BookmarksModel.getBookmarksByUserId(req.params.userId);
      res.status(200).json(bookmarks);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteBookmark: async (req, res) => {
    try {
      await BookmarksModel.deleteBookmark(req.params.id);
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = BookmarksController;
