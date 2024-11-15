const express = require('express');
const router = express.Router();
const GenresController = require('../controllers/genresController');

router.post('/', GenresController.createGenre);
router.get('/', GenresController.getGenres);
router.get('/:id', GenresController.getGenreById);
router.put('/:id', GenresController.updateGenre);
router.delete('/:id', GenresController.deleteGenre);

module.exports = router;
