const { Console } = require('console');
const express = require('express');
const fs = require('fs');
const result = JSON.parse(fs.readFileSync('./data/data.json'));
const rotas = './routes/cadastro.js'

const app = express()

const PORT = 8080

app.get('/', (_req, res) => {
  // const result = JSON.parse(fs.readFileSync('./data/data.json'));
  console.log(result.length);
  res.status(200).json(result)
});

// app.route('/:id')
//   .get((req, res) => {
//     // const result = JSON.parse(fs.readFileSync('./data/data.json'));
//     const { id } = req.params;
//     const idEcontrado = result.findIndex((user) => id === user.id)
//     // const idEcontrado = result.indexOf(id)

//     res.status(200).json(result[idEcontrado])
//   })
//   .delete()

app.get('/:id', (req, res) => {
  // const result = JSON.parse(fs.readFileSync('./data/data.json'));
  const { id } = req.params;
  const idEcontrado = result.findIndex((user) => id === user.id)
  // const idEcontrado = result.indexOf(id)
  res.status(200).json(result[idEcontrado])
});

app.delete('/:id', (req, res) => {
  const { id } = req.params;
  const idEcontrado = result.findIndex((user) => id === user.id)
  
  console.log(result.length);

  result.splice(result[idEcontrado], 1)
  fs.writeFileSync('./data/data.json', JSON.stringify(result))

  console.log(result.length);

  return res.status(204).end();
});

app.listen(PORT, () => {
  console.log(`Ouvindo na porta ${PORT}`);
});
