const router = require('express').Router();
const db = require('../models');
const Post = db.Post;
const Comment = db.Comment;
const Vote = db.Vote;


const getPosts = (req, res) => {
  Post.findAll()
    .then((posts) => {
      res.send(posts)
    })
}

const createPost = (req, res) => {
  //format of post should be {title, body}
  Post.create(req.body)
    .then((post) => {
      res.send(post);
    })
}

const deletePost = (req, res) => {
  Post.destroy({where: {id: req.params.id}})
}


router.route('/posts')
  .get(getPosts)
  .post(createPost)

router.route('/posts/:id')
  .delete(deletePost)

module.exports = router
