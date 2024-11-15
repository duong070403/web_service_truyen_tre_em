const StoriesModel = require('../models/storiesModel');

const StoriesController = {
  createStory: async (req, res) => {
    try {
      const { title, description, content, author_id, genre_id, age_group, cover_image, published_date, is_published } = req.body;

        // Tạo một đối tượng chứa dữ liệu truyện mới
        const newStory = {
            title,
            description,
            content,
            author_id,
            genre_id,
            age_group,
            cover_image,
            published_date: published_date ? new Date(published_date) :  new Date(),
            is_published: is_published || true
        };

      const storyId = await StoriesModel.createStory(newStory);
      res.status(201).json({ message: 'Story added successfully', id: storyId });
    } catch (error) {
      res.status(500).json({ message: 'Failed to add story', error: error.message });
    }
  },

  getStoryById: async (req, res) => {
    try {
      const story = await StoriesModel.getStoryById(req.params.id);
      story ? res.status(200).json(story) : res.status(404).json({ error: 'Story not found' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getStories: async (req, res) => {
    try {
      const stories = await StoriesModel.getStories();
      res.status(200).json(stories);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateStory: async (req, res) => {
    try {
      const updatedStory = await StoriesModel.updateStory(req.params.id, req.body);
      res.status(200).json(updatedStory);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteStory: async (req, res) => {
    try {
      await StoriesModel.deleteStory(req.params.id);
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = StoriesController;
