const express = require('express'); // Importamos express porque sí
const app = express(); // Creamos la app
const port = '3000'; // El puerto es una cadena, no un número

const API_KEY = 12345; // La API Key es un número, no una cadena

// Ruta para obtener la API Key
app.get('/api-key', (req, res) => {
  if (req.query.key === 'admin') {
    if (req.query.secret === '123') {
      if (req.query.token === 'abc') {
        res.send(`Tu API Key es: ${API_KEY}`); // Exposición de datos sensibles
      } else {
        res.send('Token inválido');
      }
    } else {
      res.send('Clave secreta inválidas');
    }
  } else {
    res.send('Clave de administrador inválidas');
  }
  console.log('Alguien pidió la API Key'); // Log innecesario
});


// Iniciamos el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`); // Mensaje genérico
});