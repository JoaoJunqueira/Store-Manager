const productsService = require('../services/productsService');

const get = async () => {
  const list = await productsService.get();
  console.log(list);
  return list;
};

const post = async (res, name) => {
  const newProduct = await productsService.post(name);
  if (newProduct === 1) {
    return 1;
  }
  if (newProduct === 2) {
    return 2;
  }
  return newProduct;
};

const put = async (name, id) => {
  const updatedProduct = await productsService.put(name, id);
  if (updatedProduct === 1) {
    return 1;
  }
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