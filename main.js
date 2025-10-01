const express = require('express');
const path = require('path');
const app = express();
const datos = require('./public/data.json');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));

app.get('/', (req, res) => {
  const name_svg = 'inicio.svg';
  res.render('index', { name_svg });
});

app.get('/opcion/:id', (req, res) => {
  const data = datos[req.params.id];
  if (!data) return res.status(404).send("Opción no válida");
  res.render('pagina', { data });
});

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
