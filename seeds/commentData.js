const { Comment } = require('../models');

const commentData =[
    {
      "post_id": 1,
      "author": "admin@admin.com",
      "content": "this is the first seeded comment"
    }
]

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;