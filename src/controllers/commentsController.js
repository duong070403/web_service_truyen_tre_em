const CommentsModel = require('../models/commentsModel');

// Lấy danh sách bình luận theo ID truyện
const getCommentsByStoryId = async (req, res) => {
    const { story_id } = req.params;
    try {
        const comments = await CommentsModel.getCommentsByStoryId(story_id);
        if (comments) {
            res.status(200).json(comments); // Trả về danh sách bình luận dưới dạng JSON
        } else {
            res.status(404).json({ message: 'No comments found for this story' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving comments', error });
    }
};

// Gửi bình luận mới
const postComment = async (req, res) => {
    const { story_id, user_id,email, comment } = req.body;
    try {
        const newComment = await CommentsModel.addComment(story_id, user_id,email, comment);
        res.status(201).json({ message: 'Comment added successfully', comment: newComment });
    } catch (error) {
        res.status(500).json({ message: 'Error posting comment', error });
    }
};

module.exports = { getCommentsByStoryId, postComment };
