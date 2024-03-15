const express = require("express");

const { login, cadastro } = require("../controllers");

const empresas = express.Router();

empresas.post("/login", async (request, response) => {
  await login(request, response);
});

empresas.post("/cadastro", async (request, response) => {
  await cadastro(request, response);
});

module.exports = empresas;