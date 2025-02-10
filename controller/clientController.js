const clientServices = require('../services/clientServices');

const buscarClientes = async (request, response) =>{
  let dados = await clientServices.dadosClientes();
  response.json(dados);
}


module.exports = {
  buscarClientes
}