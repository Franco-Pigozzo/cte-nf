const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;

const criacaoToken = (user) => {
  const token = jwt.sign({ user: JSON.stringify(user) }, JWT_SECRET, {
    expiresIn: "1d",
  });
  return token;
};

const verificacaoToken = (token) => {
  const payload = jwt.verify(token, JWT_SECRET);
  return payload;
};

module.exports = {
  criacaoToken,
  verificacaoToken,
};
