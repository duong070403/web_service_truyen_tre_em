const AuthorsModel = require('../models/authorsModel');

const AuthorsController = {
  createAuthor: async (req, res) => {
    try {
      const authorId = await AuthorsModel.createAuthor(req.body);
      res.status(201).json({ id: authorId });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getAuthorById: async (req, res) => {
    try {
      const author = await AuthorsModel.getAuthorById(req.params.id);
      author ? res.status(200).json(author) : res.status(404).json({ error: 'Author not found' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getAuthors: async (req, res) => {
    try {
      const authors = await AuthorsModel.getAuthors();
      res.status(200).json(authors);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateAuthor: async (req, res) => {
    try {
      const updatedAuthor = await AuthorsModel.updateAuthor(req.params.id, req.body);
      res.status(200).json(updatedAuthor);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteAuthor: async (req, res) => {
    try {
      await AuthorsModel.deleteAuthor(req.params.id);
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = AuthorsController;
