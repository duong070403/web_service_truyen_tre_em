const GenresModel = require('../models/genresModel');

const GenresController = {
  createGenre: async (req, res) => {
    try {
      const genreId = await GenresModel.createGenre(req.body);
      res.status(201).json({ id: genreId });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getGenreById: async (req, res) => {
    try {
      const genre = await GenresModel.getGenreById(req.params.id);
      genre ? res.status(200).json(genre) : res.status(404).json({ error: 'Genre not found' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getGenres: async (req, res) => {
    try {
      const genres = await GenresModel.getGenres();
      res.status(200).json(genres);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateGenre: async (req, res) => {
    try {
      const updatedGenre = await GenresModel.updateGenre(req.params.id, req.body);
      res.status(200).json(updatedGenre);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteGenre: async (req, res) => {
    try {
      await GenresModel.deleteGenre(req.params.id);
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = GenresController;
