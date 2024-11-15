const db = require('../config/firebaseConfig');

const CommentsModel = {
    getCommentsByStoryId: async (storyId) => {
        const snapshot = await db.collection('Comments').where('story_id', '==', storyId).get();
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    },

    postComment: async (commentData) => {
        const commentRef = await db.collection('Comments').add(commentData);
        return commentRef.id;
    }
};

module.exports = CommentsModel;
