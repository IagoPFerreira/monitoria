const model = require('../models/userModel');

const getAllUsers = async () => {
  const users = await model.getAllUsers();

  if (!users) {
    return ({ error: 404, message: 'Not found data'})
  }

  return users;
}

const getUserById = async (id) => {
  if (!id) {
    return ({ error: 404, message: 'invalid id'})
  }

  const user = await model.getUserById(id);

  if (!user) {
    return ({ error: 404, message: 'invalid id'})
  }

  return user;
}

const getUsersByState = async (state) => {
  if (!state) {
    return ({ error: 404, message: 'invalid state'})
  }

  const users = await model.getUsersByState(state);

  if (!users) {
    return ({ error: 400, message: 'invalid state'})
  }

  return users;
}

const insertNewUser = async (body) => {
  const {first_name, last_name} = body

  const fullname = first_name + last_name

  const verifyUser = model.getUserByName(fullname);

  if (verifyUser.length !== 0) return ({ error: 409, message: 'User already exists' })

  console.log('passei');
  const newUser = await model.insertNewUser(body);

  if (newUser.err) return ({ error: 409, message: newUser.err.message });

  const allUsers = getAllUsers();
  return allUsers;
}

module.exports = {
  getAllUsers,
  getUserById,
  getUsersByState,
  insertNewUser
};
