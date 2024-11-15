require('dotenv').config();
var admin = require('firebase-admin');
var serviceAccount = require('./serviceAccountKey.json'); // Đường dẫn đến file JSON tải xuống

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://app-truyentreem-default-rtdb.firebaseio.com" // Thay thế <YOUR-FIREBASE-PROJECT-ID> bằng ID dự án của bạn
});

// Khởi tạo Firestore và xuất ra để sử dụng trong các model
const db = admin.firestore();

module.exports = db;
