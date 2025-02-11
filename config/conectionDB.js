const mysql2 = require("mysql2/promise");

const conectar = async () => {
  return await mysql2.createConnection({
    host: process.env.DATA_HOST,
    user: process.env.DATA_USER,
    password: process.env.DATA_PASS,
    database: process.env.DATA_NAME,
    port: process.env.DATA_PORT,
  });
};

const executar = async (sql, params) => {
  const database = await conectar();
  let [result] = await database.query(sql, params);
  await database.end();
  return result;
};

module.exports = { conectar, executar };

