const salesModel = require('../models/salesModel');

const del = async (id) => {
  const lista = await salesModel.get();
  const thereIsAProduct = lista.find((produto) => produto.id === Number(id));
    if (!thereIsAProduct) {
    return null;
  }
  const updatedSale = await salesModel.del(id);
  return updatedSale;
};

module.exports = {
  del,
};