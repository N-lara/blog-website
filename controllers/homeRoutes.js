const router = require('express').Router();
const { User , Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

//commented out was relevant to activity but ot to this challenge
//TODO change out code with relevant code
router.get('/', async (req, res) => {
  try {
    console.log('/ get request to /api/posts/');
    const postData = await Post.findAll({
      include: [{ model: User }],
    });
    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('homepage', {
      posts,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
