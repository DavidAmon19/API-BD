const database = require("../config/conectionDB");


// GET
const buscarClientes = async (request, response) =>{
    let dados = await database.executar(`SELECT * FROM tb_clientes;`)

    response.send(dados);
}


module.exports = {
    buscarClientes
}
