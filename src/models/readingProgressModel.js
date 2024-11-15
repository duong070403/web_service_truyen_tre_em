const db = require('../config/firebaseConfig');

const ReadingProgressModel = {
  createReadingProgress: async (progressData) => {
    const progressRef = await db.collection('ReadingProgress').add(progressData);
    return progressRef.id;
  },

  getReadingProgressByUserAndStory: async (userId, storyId) => {
    const snapshot = await db.collection('ReadingProgress')
      .where('user_id', '==', userId)
      .where('story_id', '==', storyId)
      .get();
    
    return snapshot.empty ? null : { id: snapshot.docs[0].id, ...snapshot.docs[0].data() };
  },

  updateReadingProgress: async (id, updateData) => {
    await db.collection('ReadingProgress').doc(id).update(updateData);
    return { id, ...updateData };
  },

  deleteReadingProgress: async (id) => {
    await db.collection('ReadingProgress').doc(id).delete();
  }
};

module.exports = ReadingProgressModel;
