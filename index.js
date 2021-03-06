const express = require('express');

const app = express();

const bodyParser = require('body-parser');
const userController = require('./controllers/userController');
const errorMiddleware = require('./middlewares/error');
const loginController = require('./controllers/loginController');
const categoryController = require('./controllers/categoryController');
const blogPostController = require('./controllers/blogPostController');

app.use(bodyParser.json());

app.listen(3000, () => console.log(new Date(), 'ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.use('/user', userController);
app.use('/login', loginController);
app.use('/categories', categoryController);
app.use('/post', blogPostController);

app.use(errorMiddleware);
