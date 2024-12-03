const db = require('../config/firebaseConfig');


const CommentsModel = {
    addComment: async (story_id, user_id,email, comment) => {
      try {
        const newComment = {
          story_id,
          user_id,
          email,
          comment,
          created_at: new Date(),
        };
  
        // Thêm bình luận vào collection "Comments"
        const docRef = await db.collection('Comments').add(newComment);
        return { id: docRef.id, ...newComment }; // Trả về thông tin bình luận đã thêm
      } catch (error) {
        console.error('Error adding comment to Firestore:', error);
        throw new Error('Error adding comment');
      }
    },
    // 
    getCommentsByStoryId: async (storyId) => {
        const snapshot = await db.collection('Comments').where('story_id', '==', storyId).get();
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    },
  };
  
module.exports = CommentsModel;
