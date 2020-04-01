// Importaciones
const express = require('express');

// Inicializaciones
const app = express();
require('./public/connection-database');

app.use(express.json());

// Ruta roles
app.use('/api', require('./public/api/routes/extra.routes'));

  app.listen(3000, function () {
    console.log('Servidor web escuchando en el puerto 3000!');
  });
