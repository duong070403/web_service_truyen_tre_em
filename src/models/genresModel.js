const db = require('../config/firebaseConfig');

const GenresModel = {
  createGenre: async (genreData) => {
    const genreRef = await db.collection('Genres').add(genreData);
    return genreRef.id;
  },

  getGenreById: async (id) => {
    const doc = await db.collection('Genres').doc(id).get();
    return doc.exists ? { id: doc.id, ...doc.data() } : null;
  },

  getGenres: async () => {
    const snapshot = await db.collection('Genres').get();
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  },

  updateGenre: async (id, updateData) => {
    await db.collection('Genres').doc(id).update(updateData);
    return { id, ...updateData };
  },

  deleteGenre: async (id) => {
    await db.collection('Genres').doc(id).delete();
  }
};

module.exports = GenresModel;
