const axios = require('axios');

const getAllUsers = () => axios.get('http://localhost:8080/')
  .then((response) => response.data);

const getUserById = (id) => {
  console.log(id);
  return axios.get(`http://localhost:8080/${id}`)
};

module.exports = {
  getAllUsers,
  getUserById,
}