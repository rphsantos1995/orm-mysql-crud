const { Category } = require('../models');

const createCategory = async (categoryInfo) => {
  const newCategory = await Category.create(categoryInfo);
  return {name: newCategory.dataValues.name};
};

const getAllCategories = async () => {
  const AllCategories = await Category.findAll();

  return  AllCategories;
};

module.exports = {
  createCategory,
  getAllCategories
};