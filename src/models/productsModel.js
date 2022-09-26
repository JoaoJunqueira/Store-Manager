const { connection } = require('./connection');

const get = async () => {
  const query = 'SELECT * FROM StoreManager.products';
  const [result] = await connection.execute(query);
  return result;
};

// Requisito 3
const post = async (name) => {
  const query = 'INSERT INTO StoreManager.products (name) VALUES (?)';
  const [result] = await connection.execute(query, [name]);
  return result.insertId;
};

module.exports = {
  get,
  post,
};