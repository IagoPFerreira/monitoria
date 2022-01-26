const getAll = async (_req, res, next) => {
  // const {} = req;
  const response = awaitservice.getAll()
}

// (req, res) => {
//   const { body: {}, params: {}, query: {} } = req;

//   // const response = getById()

//   // if (response.message) return response;


  
// }

// const getById = async (req, res, next) => {
//   const { id } = req.params;

//   // if (!id) return res.status(404).json({ message: 'id inexistente' });
//   return !id ? res.status(404).json({ message: 'id inexistente' }) : res.status(200).json({ user })

//   const getAllService = await service(id)

//   if (getAllService === '') retur
// }

module.exports = {
  getAll,
};