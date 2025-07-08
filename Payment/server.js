const express = require('express');
const app = express();

app.post('/verifier', (req, res) => {
  res.send('Le paiement a été vérifié avec succès');
});

app.post('/creer', (req, res) => {
  res.send('Le paiement a été créé avec succès');
});

app.listen(8082, () => {
  console.log('Le service de paiement est en cours d\'exécution sur le port 8082');
});