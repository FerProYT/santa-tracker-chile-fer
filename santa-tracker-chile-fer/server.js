const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const port = 8080;

// Servir frontend
app.use(express.static(path.join(__dirname, "public")));

// Servir API
app.get("/api/santa/state", (req, res) => {
  const statePath = path.join(__dirname, "api", "santa", "state.json");
  try {
    const state = JSON.parse(fs.readFileSync(statePath, "utf-8"));
    res.json(state);
  } catch (err) {
    res.status(500).json({ error: "No se pudo leer state.json" });
  }
});

app.listen(port, () => console.log(`Servidor corriendo en http://localhost:${port}`));
