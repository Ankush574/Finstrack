const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const transactionRoutes = require('./routes/transactionRoutes');

const app = express();
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/fintrack');
app.use('/api/transactions', transactionRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));