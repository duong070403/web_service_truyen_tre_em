// Import các module cần thiết
require('dotenv').config();
const express = require('express');
const app = express();
const db = require('./config/firebaseConfig'); 
const indexRoutes = require('./routes/indexRoutes');

// Middleware
app.use(express.json()); // Để parse JSON request body

// Đăng ký các route chính của ứng dụng
app.use('/api', indexRoutes);

// Xử lý lỗi 404 - Not Found
app.use((req, res, next) => {
  res.status(404).json({ error: 'API route not found' });
});

// Xử lý lỗi chung
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Khởi động server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
