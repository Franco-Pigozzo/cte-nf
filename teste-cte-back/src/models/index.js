const connection = require("../database/connection");

const cadastroEmpresa = async (user) => {
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
  } = user;

  return await connection("empresas")
    .insert({
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
    })
    .returning("*");
};

const loginEmpresa = async (cnpj, senha) => {
  return await connection("empresas")
    .select("nome_fantasia")
    .where("cnpj", cnpj)
    .andWhere("senha", senha)
    .first();
};

module.exports = {
  cadastroEmpresa,
  loginEmpresa,
};
