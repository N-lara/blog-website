const { Post } = require('../models');

const postData =[
    {
      "title": "admin Post",
      "author": 1,
      "content": "this is the first seeded post"
    }
]

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;