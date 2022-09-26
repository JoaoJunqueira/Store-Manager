const productsService = require('../services/productsService');

const get = async () => {
  const list = await productsService.get();
  return list;
};

const post = async (name) => {
  const newProduct = await productsService.post(name);
  return newProduct;
};

module.exports = {
  get,
  post,
};