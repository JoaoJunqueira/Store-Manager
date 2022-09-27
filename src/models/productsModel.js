const { connection } = require('./connection');

const get = async () => {
  const query = 'SELECT * FROM StoreManager.products';
  const [result] = await connection.execute(query);
  return result;
};

const post = async (name) => {
  const query = 'INSERT INTO StoreManager.products (name) VALUES (?)';
  const [result] = await connection.execute(query, [name]);
  return result.insertId;
};

const put = async (name, id) => {
  const query = `UPDATE StoreManager.products SET name = '${name}' WHERE id = ${id}`;
  await connection.execute(query);
  const query2 = `SELECT * FROM StoreManager.products WHERE id = ${id}`;
  const [result] = await connection.execute(query2, [name, id]);
  return result;
};

module.exports = {
  get,
  post,
  put,
};