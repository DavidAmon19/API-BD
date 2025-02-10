const database = require("../config/conectionDB");
let TABLE = "tb_clientes";


// Buscar todos os clientes

const dadosClientes = async () =>{
    let sql = `SELECT * FROM ${TABLE};`;
    let dados = await database.executar(sql);
    return dados;
}



module.exports = {
    dadosClientes
}