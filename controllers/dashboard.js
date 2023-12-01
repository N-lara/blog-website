const router = require('express').Router();
const { User , Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
      console.log('/dashboard get request to /api/posts/');
      const postData = await Post.findAll({
        include: [{ model: User }],
        where: {author: req.session.user_id}
      });
      const posts = postData.map((post) => post.get({ plain: true }));
      res.render('dashboard', {
        posts,
      });
    } catch (err) {
      res.status(500).json(err);
    }
});


router.get('/:id', withAuth, async (req, res) => {
    try {
      const id = req.params.id;
      console.log(id)
      console.log(`/dashboard/${id} get request to /api/posts/`);
      const postData = await Post.findAll({
        include: [{ model: User, Comment }],
        where:{id: req.params.id}
      });
      // console.log(postData);
      const post = postData.map((post) => post.get({ plain: true }));
      console.log(post);
      res.render('dashboard-post', {
         post,
      });
    } catch (err) {
      res.status(500).json(err);
    }
});

module.exports = router;