const database = require("../config/conectionDB");
const bcrypt = require("bcrypt");
let TABLE = "tb_usuarios";

const buscarUsuarios = async () =>{
    let sql = `SELECT nome, papel FROM ${TABLE};`;
    let dados = await database.executar(sql);
    return dados;
}

const buscarUsuarioPorId = async (id) =>{
    let sql = `SELECT nome, papel FROM ${TABLE} WHERE id = ?;`;
    let dados = await database.executar(sql, [id]);
    return dados;
}

const cadastrarUsuario = async (nome, email, senha, papel = "usuario") =>{

    const senhaCriptografada = await bcrypt.hash(senha,10);

    let sql = `
        INSERT INTO ${TABLE}(nome, email, senha, papel)
        VALUES (?,?,?,?);
    `;
    let params = [nome, email, senhaCriptografada, papel];
    await database.executar(sql, params);
    return {mensagem: `Usuário cadastrado com sucesso`};
}

const atualizarUsuario = async (id, nome, email, papel) => {
    let sql = `
        UPDATE ${TABLE}
        SET nome = ?, email = ?, papel = ?
        WHERE id = ?
    `;
    let params = [nome, email, papel, id];
    await database.executar(sql, params);
    return {mensagem: `Usuario atualizado com sucesso.`};
}
 
const deletarUsuario = async (id) =>{
    let sql = `DELETE FROM ${TABLE} WHERE id = ?;`;
    await database.executar(sql, [id]);
    return {mensagem: `Usuario deletado com sucesso`};
}

const loginUsuario = async (email, senha) =>{

    let sql = `SELECT * FROM ${TABLE} WHERE email = ?`;
    let usuario = await database.executar(sql, [email]);

    if(!usuario){
        throw new Error("Dados invalidos");
    }

    const senhaValidada = await bcrypt.compare(senha, usuario[0].senha);

    if(!senhaValidada){
        throw new Error("Dados invalidos");
    }

    return {
        nome: usuario[0].nome,
        papel: usuario[0].papel
    };
}

module.exports = {
    buscarUsuarios,
    buscarUsuarioPorId,
    cadastrarUsuario,
    atualizarUsuario,
    deletarUsuario,
    loginUsuario
}



// Davi12345
// io23u4nto398fu7bwqd9fga8sgbf