// index.js
const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/users', require('./routes/auth'));
app.use('/api/tasks', require('./routes/tasks'));
app.use('/api/insights', require('./routes/insights'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));