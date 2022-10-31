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

const del = async (id) => {
  const lista = await productsModel.get();
  const thereIsAProduct = lista.find((produto) => produto.id === Number(id));
  if (!thereIsAProduct) {
    return null;
  }
  const updatedProduct = await productsModel.del(id);
  return updatedProduct;
};

const getQuery = async (q) => {
  const list = await productsModel.getQuery(q);
  return list;
};

module.exports = {
  get,
  post,
  put,
  del,
  getQuery,
};