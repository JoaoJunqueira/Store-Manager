const { connection } = require('./connection');

const get = async () => {
  const query = 'SELECT * FROM StoreManager.products';
  const [result] = await connection.execute(query);
  return result;
};

const create = async ({ name }) => {
  const query = 'INSERT INTO StoreManager.products (id, name) VALUES(?, ?, ?)';
  const [result] = await connection.execute(query, [name]);
  return result.insertId;
};

module.exports = {
  get,
  create,
};