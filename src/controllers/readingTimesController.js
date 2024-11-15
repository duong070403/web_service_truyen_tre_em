const ReadingTimesModel = require('../models/ReadingTimesModel');

const addReadingTime = async (req, res) => {
    try {
        const { user_id, duration } = req.body;

        const newReadingTime = {
            user_id,
            duration
        };

        const readingTimeId = await ReadingTimesModel.addReadingTime(newReadingTime);
        res.status(201).json({ message: 'Reading time recorded successfully', id: readingTimeId });
    } catch (error) {
        console.error('Error recording reading time:', error);
        res.status(500).json({ message: 'Failed to record reading time', error: error.message });
    }
};

module.exports = {
    addReadingTime
};
