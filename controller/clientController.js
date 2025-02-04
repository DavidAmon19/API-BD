const database = require("../config/conectionDB");
let TABLE = "tb_clientes";

// GET
const buscarClientes = async (request, response) => {
  let dados = await database.executar(`SELECT * FROM ${TABLE};`);

  response.send(dados);
};

const buscarClientesPorId = async (request, response) => {
  let id = request.params.id;

  let dados = await database.executar(
    `SELECT * FROM ${TABLE} WHERE id = ${id}`
  );

  response.send(dados);
};

const inserirNovoCliente = async (request, response) => {
  let { nome, email, data_cadastro, telefone, classe } = request.body;

  let dados = await database.executar(`
        INSERT INTO ${TABLE}(nome, email, data_cadastro, telefone, classe) 
        VALUES ('${nome}', '${email}', '${data_cadastro}', '${telefone}', '${classe}');`);

  response.status(201).send({ mensage: `Cliente cadastrado com sucesso` });
};

module.exports = {
  buscarClientes,
  buscarClientesPorId,
  inserirNovoCliente
};
