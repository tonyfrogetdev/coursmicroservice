const express = require('express');
const proxy = require("express-http-proxy");

const app = express();

// ✅ ici tu ajoutes le suffixe /api/auth à l’URL du service
app.use("/api/auth", proxy("http://auth:8081/api/auth"));

app.listen(3000, () => {
  console.log("✅ API Gateway en écoute sur le port 3000");
});
