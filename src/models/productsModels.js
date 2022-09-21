const { connection } = require('./connection');

const create = async ({ id, name }) => {
  const query = 'INSERT INTO StoreManager.products (id, name) VALUES(?, ?, ?)';
  const [result] = await connection.execute(query, [id, name]);
  return result.insertId;
};

module.exports = {
  create,
};