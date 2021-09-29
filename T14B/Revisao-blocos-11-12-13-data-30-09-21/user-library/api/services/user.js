const model = require('../models/user');

const getUserById = async (id) => {
  if (!id) {
    return ({ error: 404, message: 'invalid id'})
  }

  const user = await model.getUserById(id);

  if (!user) {
    return ({ error: 400, message: 'invalid id'})
  }

  return user;
}

const getUsersByState = async (state) => {
  if (!state) {
    return ({ error: 404, message: 'invalid state 1'})
  }

  const users = await model.getUsersByState(state);

  if (!users) {
    return ({ error: 400, message: 'invalid state 2'})
  }

  return users;
}

module.exports = {
  getUserById,
  getUsersByState,
};
