const db = require('../config/firebaseConfig');

const ReadingTimesModel = {
    addReadingTime: async (readingData) => {
        const readingRef = await db.collection('ReadingTimes').add(readingData);
        return readingRef.id;
    },
    getReadingTimesByUser: async (userId) => {
        const snapshot = await db.collection('ReadingTimes').where('user_id', '==', userId).get();
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    }
};

module.exports = ReadingTimesModel;
