const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

dotenv.config();
const app = express();

app.use(express.json());
connectDB();

// ✅ important : le chemin doit être EXACTEMENT celui-ci
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`✅ Service Auth en écoute sur le port ${PORT}`);
});
