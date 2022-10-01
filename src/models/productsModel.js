const { connection } = require('./connection');

const get = async () => {
  const query = 'SELECT * FROM StoreManager.products';
  const [result] = await connection.execute(query);
  // console.log(JSON.parse(JSON.stringify(result)));
  return result;
};

const post = async (name) => {
  const query = 'INSERT INTO StoreManager.products (name) VALUES (?)';
  const [result] = await connection.execute(query, [name]);
  console.log(result.insertId);
  return result.insertId;
};

const put = async (name, id) => {
  const query = `UPDATE StoreManager.products SET name = '${name}' WHERE id = ${id}`;
  await connection.execute(query);
  const query2 = `SELECT * FROM StoreManager.products WHERE id = ${id}`;
  const [result] = await connection.execute(query2, [name, id]);
  return result;
};

const del = async (id) => {
  const query = `DELETE FROM StoreManager.products WHERE id = ${id}`;
  await connection.execute(query);
};

module.exports = {
  get,
  post,
  put,
  del,
};