// const { connection } = require('./connection');

// const getSales = async () => {
//   const query = 'SELECT * FROM StoreManager.sales';
//   const [result] = await connection.execute(query);
//   return result;
// };

// const getSalesProducts = async () => {
//   const query = 'SELECT * FROM StoreManager.sales_products';
//   const [result] = await connection.execute(query);
//   return result;
// };

// const del = async (id) => {
//   const query = `DELETE FROM StoreManager.sales WHERE id = ${id}`;
//   await connection.execute(query);
// };

// module.exports = {
  // getSales,
  // getSalesProducts,
  // del,
// };