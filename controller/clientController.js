const clientServices = require('../services/clientServices');


// trabalha com a resquisição e resposta de buscar clientes
const buscarClientes = async (request, response) =>{
  let dados = await clientServices.dadosClientes();
  response.json(dados);
}

const buscarClientesPorId = async (request, response) => {
  let id = request.params.id;
  let dados = await clientServices.dadoClienteId(id);
  response.json(dados);
}

const deletarCliente = async (request, response) =>{
  let id = request.params.id;
  let dados = await clientServices.deletarDadoCliente(id);
  response.json(dados);
}

const inserirNovoCliente = async (request, response) =>{
  let {nome, email, data_cadastro, telefone, classe} = request.body;
  let dados = await clientServices.inserirDadoCliente(nome,email,data_cadastro,telefone,classe);
  response.json(dados);
}

const atualizarCliente = async (request, response) => {
  let {id, nome, email, data_cadastro, telefone, classe} = request.body;
  let dados = await clientServices.atualizarDadoCliente(id,nome,email,data_cadastro,telefone,classe);
  response.json(dados);
}


module.exports = {
  buscarClientes,
  buscarClientesPorId,
  deletarCliente,
  inserirNovoCliente,
  atualizarCliente
}