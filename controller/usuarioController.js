const usuarioService = require("../services/usuarioService");

const buscandoUsuarios = async (request, response) => {
  try {
    const usuarios = await usuarioService.buscarUsuarios();
    response.status(200).json(usuarios);
  } catch (error) {
    response.status(500).json({ mensagem: error.message });
  }
};

const buscandoUsuarioPorId = async (request, response) => {
  try {
    const id = request.params.id;
    const usuario = await usuarioService.buscarUsuarioPorId(id);
    response.status(200).json(usuario);
  } catch (error) {
    response.status(400).json({ mensagem: error.message });
  }
};

const cadastrandoUsuario = async (request, response) => {
  try {
    const { nome, email, senha, papel } = request.body;
    const cadastro = await usuarioService.cadastrarUsuario(
      nome,
      email,
      senha,
      papel
    );
    response.status(201).json(cadastro);
  } catch (error) {
    response.status(400).json({ mensagem: error.message });
  }
};

const atualizandoUsuario = async (request, response) => {
    try {
        const id = request.params.id;
        const { nome, email, papel } = request.body;
        const atualizado = await usuarioService.atualizarUsuario(
          id,
          nome,
          email,
          papel
        );
        response.status(200).json(atualizado);
      } catch (error) {
        response.status(400).json({ mensagem: error.message });
      }
};

const deletandoUsuario = async (request, response) =>{
    try {
        const id = request.params.id;
        const deletado = await usuarioService.deletarUsuario(id);
        response.status(204)
    } catch (error) {
        response.status(400).json({ mensagem: error.message });
    }
};

const logandoUsuario = async (request, response) =>{
    try {
        const { email, senha } = request.body;
        const logando = await usuarioService.loginUsuario(email, senha);
        response.status(200).json(logando);
    } catch (error) {
        response.status(401).json({ mensagem: error.message }); 
    }
};

module.exports = {
    buscandoUsuarios,
    buscandoUsuarioPorId,
    atualizandoUsuario,
    cadastrandoUsuario,
    deletandoUsuario,
    logandoUsuario
}