const express = require('express');
const app = express();
const PORT = 3000;

app.get("app.js", (req, res) => {res.send("funciona");});

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
