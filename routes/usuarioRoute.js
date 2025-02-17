const express = require("express");
const router = express.Router();
const usuarioController = require("../controller/usuarioController");

// Rotas para usuarios
router.get("/", usuarioController.buscandoUsuarios);
router.get("/:id", usuarioController.buscandoUsuarioPorId);
router.post("/", usuarioController.cadastrandoUsuario);
router.put("/:id", usuarioController.atualizandoUsuario);
router.delete("/:id", usuarioController.deletandoUsuario);

// Rota para login

router.post("/login", usuarioController.logandoUsuario);
// davi.amorin@teste.com
// Davi123

// http://2342351235:5050/email?davi.amorin@teste.com/password?Davi123

module.exports = router;