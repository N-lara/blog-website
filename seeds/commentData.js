const { Comment } = require('../models');

const commentData =[
    {
      "post_id": 1,
      "author": 1,
      "content": "this is the first seeded comment"
    }
]

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;