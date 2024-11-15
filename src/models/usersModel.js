const db = require('../config/firebaseConfig');

const UsersModel = {
  createUser: async (userData) => {
    const userRef = await db.collection('Users').add(userData);
    return userRef.id;
  },

  getUserById: async (id) => {
    const doc = await db.collection('Users').doc(id).get();
    return doc.exists ? { id: doc.id, ...doc.data() } : null;
  },

  getUsers: async () => {
    const snapshot = await db.collection('Users').get();
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  },

  updateUser: async (id, updateData) => {
    await db.collection('Users').doc(id).update(updateData);
    return { id, ...updateData };
  },

  deleteUser: async (id) => {
    await db.collection('Users').doc(id).delete();
  }
};

module.exports = UsersModel;
