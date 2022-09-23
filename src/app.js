const express = require('express');
const productController = require('./controllers/productsController');

const app = express();

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

// app.get('/products', productController.get);

app.get('/products', async (req, res) => {
  const list = await productController.get();
  res.status(200).json(list);
});

app.get('/products/:id', async (req, res) => {
  const { id } = req.params;
  const list = await productController.get();
  const selectedItem = list.filter((item) => item.id === Number(id));
  if (selectedItem.length !== 0) res.status(200).json(selectedItem[0]);
  if (selectedItem.length === 0) return res.status(404).json({ message: 'Product not found' });
});

// app.use((err, req, res, _next) => {
//   const { status, type, message } = err;
//   if (status) res.status(status).json({ type, message });
//   return res.status(404).json({ message: err.message });
// });

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo server.js para executar sua aplicação 
module.exports = app;