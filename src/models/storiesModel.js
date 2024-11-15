const db = require('../config/firebaseConfig');

const StoriesModel = {
  createStory: async (storyData) => {
    const storyRef = await db.collection('Stories').add(storyData);
    return storyRef.id;
  },

  getStoryById: async (id) => {
    const doc = await db.collection('Stories').doc(id).get();
    return doc.exists ? { id: doc.id, ...doc.data() } : null;
  },

  getStories: async () => {
    const snapshot = await db.collection('Stories').get();
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  },

  updateStory: async (id, updateData) => {
    await db.collection('Stories').doc(id).update(updateData);
    return { id, ...updateData };
  },

  deleteStory: async (id) => {
    await db.collection('Stories').doc(id).delete();
  }
};

module.exports = StoriesModel;
