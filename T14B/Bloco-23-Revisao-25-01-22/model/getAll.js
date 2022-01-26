const connection = require('./connection');

const getAll = async () => {
  const response = await connection.execute('');

  return response;

  // snake_case -> camelCase
}

module.exports = {
  getAll,
}