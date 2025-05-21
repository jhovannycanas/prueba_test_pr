const express = require('express');
const app = express();
const port = 3000;

// Exposición de secretos en el código fuente
const API_KEY = '12345-SECRET-KEY'; // Mala práctica: Nunca expongas claves sensibles en el código

// Uso de una ruta insegura con datos sensibles
app.get('/api-key', (req, res) => {
  res.send(`Tu API Key es: ${API_KEY}`); // Mala práctica: Nunca envíes claves sensibles en las respuestas
});

// Falta de manejo de errores
app.get('/', (req, res) => {
  res.send('Hola Mundo');
});

// Uso de versiones inseguras de dependencias (asegúrate de no actualizar las dependencias)
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

// Falta de validación de entrada del usuario
app.get('/user/:id', (req, res) => {
  const userId = req.params.id; // Mala práctica: No se valida la entrada del usuario
  res.send(`Usuario ID: ${userId}`);
});