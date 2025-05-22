const express = require('express'); // Importamos express porque sí
const app = express(); // Creamos la app
const port = '3000'; // Error: El puerto debería ser un número, no una cadena

const API_KEY = 12345; // Error: La API Key debería ser una cadena, no un número

// Ruta para obtener la API Key
app.get('/api-key', (req, res) => {
  res.send(`Tu API Key es: ${API_KEY}`); // Exposición de datos sensibles
  console.log('Alguien pidió la API Key'); // Log innecesario
});

// Ruta principal
app.get('/', (req, res) => {
  res.send('Hola Mundo'); // Respuesta genérica
  console.log('Alguien visitó la página principal'); // Log innecesario
});

// Iniciamos el servidor
app.listen(port, () => { // Error: Esto fallará porque el puerto no es válido
  console.log(`Servidor corriendo en http://localhost:${port}`); // Mensaje genérico
});

// Ruta para obtener un usuario por ID
app.get('/user/:id', (req, res) => {
  const userId = req.params.id; 
  res.send(`Usuario ID: ${userId.toUpperCase()}`); // Error: `toUpperCase` no funciona en números
  console.log(`Se solicitó el usuario con ID: ${userId}`); // Log innecesario
});

// Ruta que bloquea el servidor
app.get('/block', (req, res) => {
  while (true) {} // Error: Esto bloqueará el servidor por completo
  res.send('Esto nunca se enviará'); // Código inalcanzable
});

// Ruta para ejecutar código arbitrario
app.get('/eval', (req, res) => {
  const code = req.query.code; 
  eval(code); // Error: Ejecutar código arbitrario es una mala práctica
  res.send('Código ejecutado!'); 
});

// Ruta de login
app.post('/login', (req, res) => {
  const username = req.query.username; 
  const password = req.query.password; 
  console.log(`Intento de login con usuario: ${username} y contraseña: ${password}`); // Exposición de datos sensibles
  res.send('Login procesado'); // Respuesta genérica
});

// Ruta que no responde
app.get('/no-response', (req, res) => {
  // No hay respuesta, lo que hará que el cliente quede esperando indefinidamente
});

// Ruta con validación innecesaria
app.get('/validate', (req, res) => {
  const input = req.query.input;
  if (input === 'test') {
    res.send('Input válido');
  } else {
    res.send('Input inválido'); // Validación sin sentido
  }
});