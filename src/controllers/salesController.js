const salesService = require('../services/salesService');

const del = async (res, id) => {
  const deletedSales = await salesService.del(id);
  if (deletedSales === 1) res.status(404).json({ message: 'Sale not found' });
  res.status(204);
};

module.exports = {
  del,
};