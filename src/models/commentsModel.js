const db = require('../config/firebaseConfig');

const CommentsModel = {
  createComment: async (commentData) => {
    const commentRef = await db.collection('Comments').add(commentData);
    return commentRef.id;
  },

  getCommentsByStoryId: async (storyId) => {
    const snapshot = await db.collection('Comments').where('story_id', '==', storyId).get();
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  },

  deleteComment: async (id) => {
    await db.collection('Comments').doc(id).delete();
  }
};

module.exports = CommentsModel;
