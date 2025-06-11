const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Post = sequelize.define('Post', {
  title: DataTypes.STRING,
  content: DataTypes.TEXT,
  userId: DataTypes.INTEGER
});

module.exports = Post;