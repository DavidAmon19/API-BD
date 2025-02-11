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

const inserirDadoCliente = async (nome, email, data_cadastro, telefone, classe) =>{
    let sql = `
        INSERT INTO ${TABLE}(nome, email, data_cadastro,telefone,classe)
        VALUES (?,?,?,?,?);
    `
    let params = [nome,email,data_cadastro,telefone,classe];
    await database.executar(sql, params);

    return {mensagem: `Cliente cadastrado com sucesso`};
}

const atualizarDadoCliente = async (id,nome,email,data_cadastro,telefone,classe) =>{

    let sql = `
        UPDATE ${TABLE}
        SET nome = ?, email = ?, data_cadastro = ?, telefone = ?, classe = ?
        WHERE id = ?;
    `;

    let params = [nome,email,data_cadastro,telefone,classe,id];
    await database.executar(sql, params);
    return {mensagem: `Cliente atualizado com sucesso`};
}

const deletarDadoCliente = async (id) =>{
    let sql = `DELETE FROM ${TABLE} WHERE id = ?;`;
    await database.executar(sql, [id]);
    return {mensagem: `Cliente deletado com sucesso`};
}


module.exports = {
    dadosClientes,
    dadoClienteId,
    deletarDadoCliente,
    inserirDadoCliente,
    atualizarDadoCliente
}