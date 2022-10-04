const salesModel = require('../models/salesModel');

const get = async () => {
  const getSales = await salesModel.get();
  return getSales;
};

const getId = async (id) => {
  const getSales = await salesModel.getId(id);
  return getSales;
};

// const saleValidation = async (products) => {
//   const isProductThere = products.find((product) => product.productId === undefined);
//   const isQuantityThere = products.find((product) => product.quantity === undefined);
//   const isQuantityEnough = products.find((product) => product.quantity < 1);
//   if (isProductThere !== undefined) return '"productId" is required';
//   if (isQuantityThere !== undefined) return '"quantity" is required';
//   if (isQuantityEnough !== undefined) return '"quantity" must be greater than or equal to 1';
//   return 'Sale is valid';
// };

// const del = async (id) => {
//   const lista = await salesModel.get();
//   const thereIsAProduct = lista.find((produto) => produto.id === Number(id));
//     if (!thereIsAProduct) {
//     return 'Sale not found';
//   }
//   await salesModel.del(id);
//   return 'Sale deleted';
// };

module.exports = {
  get,
  getId,
};