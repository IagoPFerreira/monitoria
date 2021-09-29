const service = require('../services/user');

const getUserById = async (req, res) => {
  const { id } = req.params;

  const user = await service.getUserById(id);

  if (user.error) return res.status(user.error).json({message: user.message})

  return res.status(200).json({ user });
}

const getUsersByState = async (req, res) => {
  const { state } = req.query;

  const users = await service.getUsersByState(state)

  if (users.error) return res.status(users.error).json({message: users.message})

  return res.status(200).json({ users });
}

module.exports = {
  getUserById,
  getUsersByState,
};
