const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  userId: String,
  description: String,
  amount: Number,
  type: String,
  date: Date,
});

module.exports = mongoose.model('Transaction', transactionSchema);