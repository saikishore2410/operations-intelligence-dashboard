const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;

// Middleware for parsing JSON
app.use(express.json());

// MongoDB Connection
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/yourdbname';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('MongoDB connection error:', err));

// Sample Routes
app.use('/api/auth', require('./routes/auth')); // Authentication routes
app.use('/api/tasks', require('./routes/tasks')); // Tasks routes
app.use('/api/insights', require('./routes/insights')); // Insights routes

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});