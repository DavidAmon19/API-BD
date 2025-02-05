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

const deletarCliente = async (request,response) => {
    let id = request.params.id;
    // let {novoId} = request.params;

    let dados = await database.executar(`DELETE from ${TABLE} WHERE id = ${id}`)

    response.send({mensage: `Cliente deletado com sucesso`})
}

const atualizarCliente = async (request, response) =>{

    let id = request.params.id;
    let { nome, email, data_cadastro, telefone, classe } = request.body;

    if(!nome){
        response.send({mensage: `Erro campo nome está vazio`})
    }

    let dados = await database.executar(`
        UPDATE ${TABLE}
        SET nome = '${nome}', email = '${email}', data_cadastro = '${data_cadastro}',
        telefone = '${telefone}', classe = '${classe}'
        WHERE id = ${id}
        `)

        response.send({mensage: `Usuario atualizado com sucesso`});
}

module.exports = {
  buscarClientes,
  buscarClientesPorId,
  inserirNovoCliente,
  deletarCliente,
  atualizarCliente
};
