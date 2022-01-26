const express = require('express');

const app = express();


app.get('/')

app.get('/:id')

// (req, res) => {
//   const { body: {}, params: {}, query: {} } = req;
//   if (!body) {
//     res.status().json()
//   }
// }
app.listen(8080)