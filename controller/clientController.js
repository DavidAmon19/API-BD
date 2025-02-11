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


module.exports = {
  buscarClientes,
  buscarClientesPorId,
  deletarCliente
}