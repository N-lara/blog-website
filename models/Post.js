const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//checks if password matches hashed password after hashing
class Post extends Model {}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
          model: 'User',
          key: 'email',
        },
      },
  },
  {
    sequelize,
    timestamps: true,
    createdAt: true,
    updatedAt:false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

module.exports = Post;
