const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'iago',
  password: 'iagoF@123',
  database: 'revisao_bloco_23'
});

module.exports = connection;