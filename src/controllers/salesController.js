const salesService = require('../services/salesService');

const del = async (res, id) => {
  const deletedSales = await salesService.del(id);
  return deletedSales;
};

module.exports = {
  del,
};