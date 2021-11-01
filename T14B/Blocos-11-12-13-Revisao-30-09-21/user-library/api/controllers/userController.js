const service = require('../services/userService');

const getAllUsers = async (_req, res) => {
  const data = await service.getAllUsers();

  if (data.error) return res.state(data.error).json({ message: data.message })

  res.status(200).json(data)
}

const getUserById = async (req, res) => {
  const { id } = req.params;

  const user = await service.getUserById(id);

  if (user.error) return res.status(user.error).json({message: user.message})

  return res.status(200).json([user]);
}

const getUsersByState = async (req, res) => {
  const { state } = req.query;

  console.log(state);

  const users = await service.getUsersByState(state)

  if (users.error) return res.status(users.error).json({message: users.message})

  return res.status(200).json(users);
}

const insertNewUser = async (req, res) => {
  const { body } = req;

  const newUser = await service.insertNewUser(body)

  if (newUser.error) return res.status(newUser.error).json({ message: newUser.message })

  return res.status(200).json(newUser);
}

const insertNewImage = async (req, res) => {
  const { body: { image, id } } = req;

  const newImage = await service.insertNewImage(id, image)

  if (newImage.error) return res.status(newImage.error).json({ message: newImage.message })

  return res.status(200).json(newImage);
}

module.exports = {
  getAllUsers,
  getUserById,
  getUsersByState,
  insertNewUser,
  insertNewImage,
};
