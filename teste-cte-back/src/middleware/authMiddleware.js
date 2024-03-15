const { request, response } = require("express");
const { verificacaoToken } = require("../lib/auth");

const validacaoToken = (request, response, next) => {
  const { authorization } = request.headers;

  if (!authorization) {
    return response.status(400).json({ msg: "Token não fornecido" });
  }

  const [, token] = authorization.split(" ");

  const payload = verificacaoToken(token);
  if (!payload) {
    return response.status(400).json({ msg: "Token não valido" });
  }

  const { user } = payload;

  request.headers["user"] = user;

  return next();
};

module.exports = {
  validacaoToken,
};
