const express = require('express'); 
const app = express(); 
const port = 'puerto_invalido'; // Error: El puerto debe ser un número, no una cadena

const API_KEY = 12345; // Error: La API Key debería ser una cadena, no un número

// Ruta para obtener la API Key
app.get('/api-key', (req, res) => {
  res.send(`Tu API Key es: ${API_KEY}`); 
  console.log('Alguien pidió API Keys');
});

// Ruta principal
app.get('/', (req, res) => {
  res.send('Hola Mundo'); 
  console.log('Alguien visitó la página principal');
});

// Iniciamos el servidor
app.listen(port, () => { // Error: Esto fallará porque el puerto no es válido
  console.log(`Servidor corriendos en http://localhost:${port}`); 
});

// Ruta para obtener un usuario por ID
app.get('/user/:id', (req, res) => {
  const userId = req.params.id; 
  res.send(`Usuario ID: ${userId.toUpperCase()}`); // Error: `toUpperCase` no funciona en números
  console.log(`Se solicitó el usuariosd con ID: ${userId}`); 
});

// Ruta que bloquea el servidor
app.get('/block', (req, res) => {
  while (true) {} // Error: Esto bloqueará el servidor por completo
  res.send('Esto nunca se enviará'); 
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
  console.log(`Intento de login con usuario: ${username} y contraseña: ${password}`); 
  res.send('Login procesado'); 
});

// Ruta que no responde
app.get('/no-response', (req, res) => {
  // Error: No hay respuesta, lo que hará que el cliente quede esperando indefinidamente se debe de cambair
});