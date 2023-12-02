const router = require('express').Router();
const { User , Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
      console.log('get request to dashboard/');
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
      //gets post
      console.log(`get request to dashboard/${id}`);
      const postData = await Post.findOne({
        include: [{ model: User }],
        where:{id: id}
      });
      const post = postData.get({ plain: true });

      //gets comments
      commentData = await Comment.findAll({
        include: [{ model: User }],
        where:{post_id:id},
      });
      const comments = commentData.map((comment) => comment.get({ plain: true }));
      //render page
      res.render('dashboard-post', {
        post,
        comments,
     });
    } catch (err) {
      res.status(500).json(err);
    }
});

router.put('/:id', withAuth, async (req, res) => {
  try{
    console.log(`put request to /dashboard/${req.params.id}`);
    Post.update(req.body, {
      where: { id: req.params.id, },
    })
    res.status(200);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', withAuth, async(req,res)=>{
  try{
    id = req.body.id;
    console.log(`put request to /dashboard/${id}`);
    Post.destroy({ where: { id: id, }, })
    .then(async() => { Comment.destroy({ where: { post_id: id, }, })})
    .then(res.redirect('/dashboard'))
  } catch (err) {
    res.status(500).json(err);
  }
})

module.exports = router;