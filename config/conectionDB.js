const mysql2 = require("mysql2/promise");


// Ela tem duas responsabilidades
// trazer as credenciais no codigo
const executar = async (sql) => {
    let conexao = await mysql2.createConnection({
        host: 'localhost',
        user: 'root',
        password: '1234',
        database: 'db_loja',
        port: 3306
    });

    let [result] = await conexao.query(sql);

    return result;
}

module.exports = {executar}

// query = select * from tb_clientes
// executar(`select * from tb_clientes`)


// promisse retorna dois status reject ou resolve

// conectar, depois ele vai analisar o codigo, depois vai buscar
// depois vai retornar