const { connection } = require('./connection');

const get = async () => {
  const query = `SELECT sp.sale_id AS saleId,
    sp.product_id AS productId,
    sp.quantity,
    s.date
    FROM StoreManager.sales_products AS sp
    INNER JOIN StoreManager.sales AS s
    ON sp.sale_id = s.id;`;
  const [result] = await connection.execute(query);
  return result;
};

const getId = async (id) => {
  const query = `SELECT sp.product_id AS productId,
    sp.quantity,
    s.date
    FROM StoreManager.sales_products AS sp
    INNER JOIN StoreManager.sales AS s
    ON sp.sale_id = s.id
    WHERE sp.sale_id = ${id};`;
  const [result] = await connection.execute(query);
  return result;
};

const del = async (id) => {
  const query1 = `DELETE FROM StoreManager.sales WHERE id = ${id}`;
  await connection.execute(query1);
};

module.exports = {
  get,
  getId,
  del,
  // getSales,
  // getSalesProducts,
};