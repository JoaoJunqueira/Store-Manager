const productsService = require('../services/productsService');

const get = async (req, res) => {
  try {
    // console.log(req, res, 'passou pelo controler');
    const obj = {
      name: 'thor',
    };
    productsService.get(obj);
    res.status(200).json({ xablau: 'passou pelo controler' });
  } catch (error) {
    console.log('nao passou pelo controller');
  }
};

const create = async (req, res) => {
  try {
    const { name } = req.body;
    const newProduct = await productsService.create({ name });
    res.status(201).json(newProduct);
  } catch (error) {
    // next(error);
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  get,
  create,
};