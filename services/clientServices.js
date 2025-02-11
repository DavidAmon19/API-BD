const database = require("../config/conectionDB");
let TABLE = "tb_clientes";


// Buscar todos os clientes

const dadosClientes = async () =>{
    let sql = `SELECT * FROM ${TABLE};`;
    let dados = await database.executar(sql);
    return dados;
}

const dadoClienteId = async (id) =>{
    let sql = `SELECT * FROM ${TABLE} WHERE id = ?;`;
    let dados = await database.executar(sql, [id]);
    return dados;
}

const deletarDadoCliente = async (id) =>{
    let sql = `DELETE FROM ${TABLE} WHERE id = ?;`;
    await database.executar(sql, [id]);
    return {mensagem: `Cliente deletado com sucesso`};
}


module.exports = {
    dadosClientes,
    dadoClienteId,
    deletarDadoCliente
}