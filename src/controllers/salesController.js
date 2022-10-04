const salesService = require('../services/salesService');

const get = async () => {
  const getSales = await salesService.get();
  return getSales;
};

const getId = async (id) => {
  const getSales = await salesService.getId(id);
  return getSales;
};

const del = async (id) => {
  const deletedSales = await salesService.del(id);
  return deletedSales;
};

module.exports = {
  get,
  getId,
  del,
};