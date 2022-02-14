const blogPost = require('express').Router();
const rescue = require('express-rescue');
const validateJWT = require('../auth/validateJWT');
const {postSchema} = require('../middlewares/schemas');
const blogPostService = require('../services/blogPostService');

blogPost.post('/', validateJWT, rescue(async (req, res, next) => {
  const { error } = postSchema.validate(req.body);

  if (error) return next(error);
  const userId = req.user.id;

  const { title, content, categoryIds } = req.body;

  const newPost = await blogPostService.createBlogPost({userId, title, content, categoryIds});

  if(newPost.error) return next(newPost.error);


  return res.status(201).json(newPost);

}));

module.exports = blogPost;