const productsService = require('../services/productsService');

const get = async () => {
  const list = await productsService.get();
  return list;
};

const post = async (res, name) => {
  const newProduct = await productsService.post(name);
  if (newProduct === 1) {
    // return res.status(400).json({ message: '"name" is required' });
    return 1;
  }
  if (newProduct === 2) {
    // return res.status(422).json({ message: '"name" length must be at least 5 characters long' });
    return 2;
  }
  return newProduct;
};

module.exports = {
  get,
  post,
};