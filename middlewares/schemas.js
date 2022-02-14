const Joi = require('joi');

const userSchema = Joi.object({
  displayName: Joi.string().min(8).required(),
  email: Joi.string().email().required(),
  password: Joi.string().length(6).required(),
  image: Joi.any(),
});

const categorySchema = Joi.object({
  name: Joi.string().min(3).required(),
});

const postSchema = Joi.object({
  title: Joi.string().min(3).required(),
  content: Joi.string().min(3).required(),
  categoryIds: Joi.array().required(),
});

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  
});

module.exports = {
  userSchema,
  loginSchema,
  categorySchema,
  postSchema
};