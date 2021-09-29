const data = require('../data/data.json');

const getUserById = (id) => data.find((user) => user.id === id);

const getUsersByState = (state) => data.filter((user) => user.state === state);

module.exports = {
  getUserById,
  getUsersByState,
}