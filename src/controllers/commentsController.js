const CommentsModel = require('../models/commentsModel');

const CommentsController = {
  createComment: async (req, res) => {
    try {
      const commentId = await CommentsModel.createComment(req.body);
      res.status(201).json({ id: commentId });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getCommentsByStoryId: async (req, res) => {
    try {
      const comments = await CommentsModel.getCommentsByStoryId(req.params.storyId);
      res.status(200).json(comments);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteComment: async (req, res) => {
    try {
      await CommentsModel.deleteComment(req.params.id);
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = CommentsController;
