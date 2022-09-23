const productsService = require('../services/productsService');

const get = async () => {
    const list = await productsService.get();
    return list;
};

// const get = async (req, res) => {
  // try {
    // const list = await productsService.get();
    // res.status(200).json(list);
    // return list;
  // } catch (error) {
    // next(error);
  //   return res.status(404).json({ message: 'Product not found' });
  // }
// };

// const getId = async (req, res, next) => {
//   try {
//     const list = await productsService.get();
//     const selectedItem = list.filter((item) => item.id )
//     res.status(200).json(list);
//   } catch (error) {
//     next(error);
//   }
// };

// const create = async (req, res) => {
//   try {
//     const { name } = req.body;
//     const newProduct = await productsService.create({ name });
//     res.status(201).json(newProduct);
//   } catch (error) {
//     // next(error);
//     res.status(400).json({ message: error.message });
//   }
// };

module.exports = {
  get,
  // create,
};