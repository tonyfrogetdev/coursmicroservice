const express = require('express');
const app = express();
const proxy = require("express-http-proxy")

app.use("/api/paiement", proxy("http://localhost:8082"))

app.use("/api/auth", proxy("http://localhost:8081"))

app.listen(3000, () => {
  console.log('API Gateway en cours d\'exécution sur le port 3000');
});