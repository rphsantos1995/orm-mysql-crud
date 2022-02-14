const { BlogPost } = require('../models');
const { Category } = require('../models');
const { User } = require('../models');
// const { PostCategory } = require('../models');

const createBlogPost = async (userInfo) => {
 const findAllCategories = await Category.findAll({ where: { id: userInfo.categoryIds } });

 if (findAllCategories.length 
    < userInfo.categoryIds.length) {
 return { 
      error: { code: 'badRequest', message: '"categoryIds" not found' } }; 
}

  const newBlogPost = await BlogPost.create(userInfo);
  const { id, userId, title, content } = newBlogPost.dataValues;

/** Tentando atualizar a tabela PostsCategories sem sucesso....
 
  const { categoryIds } = userInfo;
  const categoryId = categoryIds[0];

  const newPostedCategory = await PostCategory.create({ id, categoryId });
  console.log(newPostedCategory); 

*/

  return { id, userId, title, content };
};

const getAllPosts = async () => {
  const posts = await BlogPost.findAll({ include: [
    { model: User, as: 'user' },
    { model: Category, as: 'categories' },
] });

  return posts;
};

const getPostById = async () => {

}


module.exports = {
  createBlogPost,
  getAllPosts,
  getPostById,
};