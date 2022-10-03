const salesModel = require('../models/salesModel');

const del = async (id) => {
  const lista = await salesModel.get();
  const thereIsAProduct = lista.find((produto) => produto.id === Number(id));
    if (!thereIsAProduct) {
    return 'Sale not found';
  }
  await salesModel.del(id);
  return 'Sale deleted';
};

module.exports = {
  del,
};