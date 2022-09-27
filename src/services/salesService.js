const salesModel = require('../models/salesModel');

const del = async (id) => {
  const lista = await salesModel.get();
  if (id > lista.length) {
    return 1;
  }
  const updatedSale = await salesModel.del(id);
  return updatedSale;
};

module.exports = {
  del,
};