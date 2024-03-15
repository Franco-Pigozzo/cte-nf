const { loginEmpresa, cadastroEmpresa } = require("../models");
const { criacaoToken } = require ("../lib/auth")

const login = async (request, response) => {
  const { cnpj, senha } = request.body;

  const user = await loginEmpresa(cnpj, senha);

  if (!user) {
    return response.status(404).json({ msg: "User not found" });
  }

  delete user.senha;

  const token = criacaoToken(user);

  return response.status(200).json({
    data: {
      user,
      token,
    },
  });
};

const cadastro = async (request, response) => {
  const {
    cnpj,
    senha,
    anexo_cert,
    senha_cert,
    nome_fantasia,
    contato,
    endereço,
    numero,
    bairro,
    cidade,
    uf,
    whatsapp,
    email,
  } = request.body;

  const user = {
    cnpj,
    senha,
    anexo_cert,
    senha_cert,
    nome_fantasia,
    contato,
    endereço,
    numero,
    bairro,
    cidade,
    uf,
    whatsapp,
    email,
  };

  const empresaCriada = await cadastroEmpresa(user);

  return response.status(201).json(empresaCriada);
};

module.exports = {
  login,
  cadastro,
};
