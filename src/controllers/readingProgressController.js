const ReadingProgressModel = require('../models/readingProgressModel');

const ReadingProgressController = {
  createReadingProgress: async (req, res) => {
    try {
      const progressId = await ReadingProgressModel.createReadingProgress(req.body);
      res.status(201).json({ id: progressId });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getReadingProgressByUserAndStory: async (req, res) => {
    try {
      const progress = await ReadingProgressModel.getReadingProgressByUserAndStory(req.params.userId, req.params.storyId);
      progress ? res.status(200).json(progress) : res.status(404).json({ error: 'Reading progress not found' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateReadingProgress: async (req, res) => {
    try {
      const updatedProgress = await ReadingProgressModel.updateReadingProgress(req.params.id, req.body);
      res.status(200).json(updatedProgress);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteReadingProgress: async (req, res) => {
    try {
      await ReadingProgressModel.deleteReadingProgress(req.params.id);
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = ReadingProgressController;
