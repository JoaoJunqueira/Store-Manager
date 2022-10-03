const productsService = require('../services/productsService');

const get = async () => {
  const list = await productsService.get();
  return list;
};

const post = async (name) => {
  const newProduct = await productsService.post(name);
  return newProduct;
};

const put = async (name, id) => {
  const updatedProduct = await productsService.put(name, id);
  return updatedProduct;
};

const del = async (id) => {
  const deletedProduct = await productsService.del(id);
  return deletedProduct;
};

const getQuery = async (q) => {
  const lista = await productsService.getQuery(q);
  return lista;
};

module.exports = {
  get,
  post,
  put,
  del,
  getQuery,
};