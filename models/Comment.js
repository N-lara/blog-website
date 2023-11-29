const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    post_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Post',
        key: 'id',
      },
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

module.exports = Comment;
