const express = require('express');

const app = express();

const bodyParser = require('body-parser');
const userController = require('./controllers/userController');
const errorMiddleware = require('./middlewares/error');

app.use(bodyParser.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.use('/user', userController);

app.use(errorMiddleware);
