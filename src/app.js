const express = require('express');
const productController = require('./controllers/productsController');
const salesController = require('./controllers/salesController');

const app = express();

app.use(express.json());

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.get('/products', async (req, res) => {
  const list = await productController.get();
  res.status(200).json(list);
});

app.get('/products/search', async (req, res) => {
  const { q } = req.query;
  console.log(q);
  const list = await productController.getQuery(q);
  return res.status(200).json(list);
});

app.get('/products/:id', async (req, res) => {
  const { id } = req.params;
  const list = await productController.get();
  const selectedItem = list.filter((item) => item.id === Number(id));
  if (selectedItem.length !== 0) return res.status(200).json(selectedItem[0]);
  if (selectedItem.length === 0) return res.status(404).json({ message: 'Product not found' });
});

app.post('/products', async (req, res) => {
  const { name } = req.body;
  const newProduct = await productController.post(res, name);
  if (newProduct === 1) return res.status(400).json({ message: '"name" is required' });
  if (newProduct === 2) {
    return res.status(422)
    .json({ message: '"name" length must be at least 5 characters long' });
  }
  return res.status(201).json(newProduct);
});

app.put('/products/:id', async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const updatedProduct = await productController.put(name, id);
  if (updatedProduct === 1) return res.status(400).json({ message: '"name" is required' });
  if (updatedProduct === 2) {
    return res.status(422)
    .json({ message: '"name" length must be at least 5 characters long' });
  }
  if (updatedProduct === 3) return res.status(404).json({ message: 'Product not found' });
  return res.status(200).json(updatedProduct[0]);
});

app.delete('/products/:id', async (req, res) => {
  const { id } = req.params;
  const deletedProduct = await productController.del(id);
  if (deletedProduct === null) return res.status(404).json({ message: 'Product not found' });
  return res.status(204).end();
});

app.delete('/sales/:id', async (req, res) => {
  const { id } = req.params;
  const deletedSales = await salesController.del(id);
  if (deletedSales === null) return res.status(404).json({ message: 'Sale not found' });
  return res.status(204).end();
});

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo server.js para executar sua aplicação 
module.exports = app;