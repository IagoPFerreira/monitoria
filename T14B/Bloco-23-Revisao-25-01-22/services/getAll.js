const getAll = async () => {
  try {
    const response = await model.getAll();
  } catch (erro) {

  }

  const { name } = response;

  if (!name) return { message: 'Nome não encontrado1' };

}

module.exports = {
  getAll,
}