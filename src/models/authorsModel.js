const db = require('../config/firebaseConfig');

const AuthorsModel = {
  createAuthor: async (authorData) => {
    const authorRef = await db.collection('Authors').add(authorData);
    return authorRef.id;
  },

  getAuthorById: async (id) => {
    const doc = await db.collection('Authors').doc(id).get();
    return doc.exists ? { id: doc.id, ...doc.data() } : null;
  },

  getAuthors: async () => {
    const snapshot = await db.collection('Authors').get();
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  },

  updateAuthor: async (id, updateData) => {
    await db.collection('Authors').doc(id).update(updateData);
    return { id, ...updateData };
  },

  deleteAuthor: async (id) => {
    await db.collection('Authors').doc(id).delete();
  }
};

module.exports = AuthorsModel;
