const express = require('express');
const router = express.Router();
const AuthorsController = require('../controllers/authorsController');

router.post('/', AuthorsController.createAuthor);
router.get('/', AuthorsController.getAuthors);
router.get('/:id', AuthorsController.getAuthorById);
router.put('/:id', AuthorsController.updateAuthor);
router.delete('/:id', AuthorsController.deleteAuthor);

module.exports = router;
