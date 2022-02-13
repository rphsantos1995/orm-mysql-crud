const category = require('express').Router();
const rescue = require('express-rescue');
const categoryService = require('../services/categoryService');

const validateJWT = require('../auth/validateJWT');
const { categorySchema } = require('../middlewares/schemas');

category.post('/', validateJWT, rescue(async (req, res, next) => {
  const { error } = categorySchema.validate(req.body);
  if (error) return next(error);

  const newCategory = await categoryService.createCategory(req.body);

  if (newCategory.error) return next(newCategory.error);

  return res.status(201).json(newCategory);
}));

category.get('/', validateJWT, rescue(async (req, res) => {
  const allCategories = await categoryService.getAllCategories();

  return res.status(200).json(allCategories);
}));




module.exports = category;