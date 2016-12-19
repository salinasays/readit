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

const getOnePost = (req, res) => {
  Post.findById(req.params.id)
    .then((post) => {
      res.send(post)
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

const getComments = (req, res) => {
  Post.findById(req.params.id)
   .then((post) => {
     return post.getComments()
   })
   .then((comments) => {
     res.send(comments)
   })
}

const createComment = (req, res) => {
  //format of post should be {comment}

  var newComment = {
    comment: req.body.comment,
    PostId: req.params.id
  }

  Comment.create(newComment)
    .then((comment) => {
      Post.findById(req.params.id)
            .then((post) => {
              post.addComments([comment]);
              res.send(comment);
            })
    })
}

const deleteComment = (req, res) => {
  Comment.destroy({where: {id: req.params.id}});
}

router.route('/posts')
  .get(getPosts)
  .post(createPost)

router.route('/posts/:id')
  .get(getOnePost)
  .delete(deletePost)

router.route('/posts/:id/comments')
  .get(getComments)
  .post(createComment)

router.route('/comments/:id')
  .delete(deleteComment)

module.exports = router
