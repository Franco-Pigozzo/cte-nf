const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(express.json());

const empresas = require("./routes");
const { validacaoToken } = require("./middleware/authMiddleware");

app.use("/empresas", empresas);

app.use("*", validacaoToken)

app.get("/cte", ( request, response ) =>{
  console.log("a")
  return response.send("a")

})

app.listen(3000, () => {
  console.log("Server listening port 3000");
});
