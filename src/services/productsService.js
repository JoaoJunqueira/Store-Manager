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

const put = async (name, id) => {
  if (name === undefined || name === '') {
    return 1;
  }
  if (name.length < 5) {
    return 2;
  }
  const lista = await productsModel.get();
  if (id > lista.length) {
    return 3;
  }
  const updatedProduct = await productsModel.put(name, id);
  return updatedProduct;
};

module.exports = {
  get,
  post,
  put,
};