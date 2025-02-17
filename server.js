const express = require("express");
const cors    = require("cors");
const dotenv  = require("dotenv");
const app     = express();
const port    = 9090;
const clientRoutes = require("./routes/clientRoute");
const usuarioRoutes = require("./routes/usuarioRoute");

dotenv.config();

app.use(express.json());
app.use(cors());


app.use('/clientes', clientRoutes);
app.use('/usuarios', usuarioRoutes);

app.listen(port, ()=>{
    try {
        console.log(`Servidor rodando no link http://localhost:${port}`)
    } catch (error) {
        console.log(`Erro ao iniciar servidor ${error}`)
    }
});
// Todo banco e dados possui um drive diferente

// npm install mysql2
//MariaDB mysql2
//Postgresql pg
//Redis redis