const {BlogPost} = require('../models');
const {Category} = require('../models');
const { Op } = require("sequelize");

const createBlogPost = async (userInfo) => {

 const findAllCategories = await Category.findAll({where: { id:  userInfo.categoryIds  } });

 if (findAllCategories.length 
    < userInfo.categoryIds.length) return { error: { code: 'badRequest', message: "\"categoryIds\" not found" } };

  const newBlogPost = await BlogPost.create(userInfo);
  const { id, userId, title, content } = newBlogPost.dataValues;

  return { id, userId, title, content };

}


module.exports = {
  createBlogPost
}