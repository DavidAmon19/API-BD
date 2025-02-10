const express    = require("express");
const router     = express.Router();
const clientController = require("../controller/clientController");

router.get('/', clientController.buscarClientes);
// router.get('/:id', clientController.buscarClientesPorId);
// router.post('/', clientController.inserirNovoCliente);
// router.delete('/:id', clientController.deletarCliente);
// router.put('/:id', clientController.atualizarCliente);

module.exports = router;