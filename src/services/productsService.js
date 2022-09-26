const productsModel = require('../models/productsModel');

const get = async () => {
  const lista = await productsModel.get();
  return lista;
};

const post = async (name) => {
  if (name === undefined || name === '') {
    return 1;
  }
  if (name.length < 5) {
    return 2;
  }
  const newProduct = await productsModel.post(name);
  return { id: newProduct, name };
};

module.exports = {
  get,
  post,
};