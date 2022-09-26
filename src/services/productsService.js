const productsModel = require('../models/productsModel');

const get = async () => {
  const lista = await productsModel.get();
  return lista;
};

const post = async (name) => {
  const newProduct = await productsModel.post(name);
  return { id: newProduct, name };
};

module.exports = {
  get,
  post,
};