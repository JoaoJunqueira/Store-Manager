const { connection } = require('./connection');

const get = async ({ }) => {

};

const create = async ({ name }) => {
  const query = 'INSERT INTO StoreManager.products (id, name) VALUES(?, ?, ?)';
  const [result] = await connection.execute(query, [name]);
  return result.insertId;
};

module.exports = {
  create,
};