const fs = require('fs')
const data = require('../data/data.json');
const crypto = require('crypto');

const generateId = () => {
  const hexstring = crypto.randomBytes(16).toString('hex')

  const id = `${hexstring.substring(0,8)}-${hexstring.substring(8,12)}-${hexstring.substring(12,16)}-${hexstring.substring(16,20)}-${hexstring.substring(20)}`

  return id;  
}

const verifyId = (id) => {
  const checkId = data.find((user) => user.id === id);

  if (checkId) generateId();
  
  return id;
}

const handleId = () => {
  const generatedId = generateId()
  const verifiedId = verifyId(generatedId)
  return verifiedId;
}

const getAllUsers = () => data;

const getUserById = (id) => data.find((user) => user.id === id);

const getUsersByState = (state) => data.filter((user) => user.state === state);

const getUserByName = (name) => data.filter((user) => {
  const fullname = user.first_name + user.last_name;
  return name === fullname
})

const insertNewUser = (newUser) => {
  const id = handleId();

  newUser.id = id;

  data.push(newUser);
  
  const newData = JSON.stringify(data)
  console.log(Array.isArray(data));
  
  try {
    console.log('opa');
    fs.writeFileSync('../../api/data/data.json', newData)
  } catch (err) {
    return err
  }
}
module.exports = {
  getAllUsers,
  getUserById,
  getUsersByState,
  getUserByName,
  insertNewUser,
}