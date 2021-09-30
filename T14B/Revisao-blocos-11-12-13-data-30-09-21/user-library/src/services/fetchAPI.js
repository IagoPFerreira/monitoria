const axios = require('axios');

const getAllUsers = () => axios.get('http://localhost:8080/')
  .then((response) => response.data);

const getUserById = (id) => axios.get(`http://localhost:8080/${id}`)
    .then((response) => response.data);

const getUsersByState = (state) => axios.get(`http://localhost:8080/search/?state=${state}`)
    .then((response) => response.data)

const insertUser = (newUser) => axios.post('http://localhost:8080/user/new', newUser)

module.exports = {
  getAllUsers,
  getUserById,
  getUsersByState,
  insertUser
}