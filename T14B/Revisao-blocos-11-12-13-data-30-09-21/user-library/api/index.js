const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const data = require('./data/data.json')
const controller = require('./controllers/user');

const app = express();

app.use(bodyParser.json());
app.use(cors())

app.get('/', (_req, res) => {
  res.status(200).json(data)
})

app.get('/search', controller.getUsersByState)

app.get('/:id', controller.getUserById)


const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});