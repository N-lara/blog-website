const router = require('express').Router();
const { User , Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

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


router.get('/sign-up', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('sign-up');
});

router.get('/post/:id', withAuth, async(req, res)=>{
  try {
    console.log(`/ get request to /posts/${req.params.id}`);
    const postData = await Post.findByPk(req.params.id,{
      include: [{ model: User }],
    });
    const post = postData.get({ plain: true });

    //gets comments
    const commentData = await Comment.findAll({
      include: [{ model: User }],
      where:{post_id:req.params.id},
    });
    const comments = commentData.map((comment) => comment.get({ plain: true }));
    //render page
    res.render('post', {
      post,
      comments,
   });
  } catch (err) {
    res.status(500).json(err);
  }
})

router.post('/post/add-comment/:id', withAuth, async(req,res)=>{
  try {
    console.log(`post request to /post/add-comment/${req.params.id}`)
    const commentData = await Comment.create({
      post_id: req.body.post_id,
      content: req.body.content,
      author: req.body.author,
    });

    res.status(200).redirect(`/post/${req.params.id}`);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
})

router.get('/posting/:author', withAuth, async(req,res)=>{
  try {
    console.log(`get request to posting/${req.params.author}`);
    const userData = await User.findOne({where:{id:req.params.author}});
    const user = userData.get({ plain: true });
    console.log(user);
     res.render('create-post', {
      user,
    });
  } catch (err) {
    res.status(500).json(err);
  }
})

router.post(`/post/add-post/:author`, withAuth, async(req,res)=>{
  try {
    console.log(`post request to /post/add-post/${req.params.author}`)
    const postData = await Post.create({
      title: req.body.title,
      content: req.body.content,
      author: req.body.author,
    });

    res.status(200).redirect('/dashboard');
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
})


module.exports = router;
