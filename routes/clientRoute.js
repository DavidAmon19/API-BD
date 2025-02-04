const express    = require("express");
const router     = express.Router();
const clientController = require("../controller/clientController");

router.get('/', clientController.buscarClientes);
router.get('/:id', clientController.buscarClientesPorId);
router.post('/', clientController.inserirNovoCliente);

module.exports = router;