const axios = require('axios');

const getAllUsers = () => axios.get('http://localhost:8080/')
  .then((response) => response.data);

const getUserById = (id) => axios.get(`http://localhost:8080/${id}`)
    .then((response) => response.data);

const insertUser = (newUser) => axios.post('http://localhost:8080/user/new', newUser);

const updateImage = (id, image) => axios.put('http://localhost:8080/image', {id, image})
  .then((response) => response.data);

// const params = {
//   id: '77588c19-e3bd-34e2-aa82-828d67c05aca',
//   image: 'https://i0.wp.com/www.pessoaepessoa.com.br/wp-content/uploads/2020/09/Valton-Pessoa-868x1300.jpg'
// }

// getAllUsers()

// insertImage(params.id, params.image).then((respo) => console.log(respo))

module.exports = {
  getAllUsers,
  getUserById,
  insertUser,
  updateImage,
};
