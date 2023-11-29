const { Post } = require('../models');

const postData =[
    {
      "Title": "admin Post",
      "author": "admin@admin.com",
      "content": "this is the first seeded post"
    }
]

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;