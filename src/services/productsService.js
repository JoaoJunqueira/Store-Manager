// const Joi = require('joi');

const productsModel = require('../models/productsModel');

// const productsSchema = Joi.object({
//   id: Joi.number().required(),
//   name: Joi.string().required(),
// });

const get = async () => {
  const lista = await productsModel.get();
  return lista;
};

// const create = async ({ name }) => {
//   const { error } = productsSchema.validate({ name });
//   if (error) {
//     throw new Error(error.message);
//   } 
//   const newProduct = await productsModel.create({ name });
//   return { id: newProduct, name };
// };

module.exports = {
  get,
  // create,
};