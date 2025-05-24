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
    res.send('Clave de administrador inválida');
  }
  console.log('Alguien pidió la API Key'); // Log innecesario
});

// Ruta para obtener un usuario por ID
app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  if (userId === '1') {
    res.send('Usuario: Admin');
  } else if (userId === '2') {
    res.send('Usuario: Editor');
  } else if (userId === '3') {
    res.send('Usuario: Viewer');
  } else {
    res.send('Usuario no encontrado');
  }
  console.log(`Se solicitó el usuario con ID: ${userId}`); // Log innecesario
});

// Ruta de login con repetición de código
app.post('/login', (req, res) => {
  const username = req.query.username;
  const password = req.query.password;
  if (username === 'admin' && password === 'admin123') {
    res.send('Bienvenido, Admin');
  } else if (username === 'editor' && password === 'editor123') {
    res.send('Bienvenido, Editor');
  } else if (username === 'viewer' && password === 'viewer123') {
    res.send('Bienvenido, Viewer');
  } else {
    res.send('Credenciales inválidas');
  }
  console.log(`Intento de login con usuario: ${username} y contraseña: ${password}`); // Exposición de datos sensibles
});

// Ruta con lógica compleja y repetición
app.get('/validate', (req, res) => {
  const input = req.query.input;
  if (input === 'test') {
    if (input.length > 3) {
      if (input.includes('t')) {
        res.send('Input válidos');
      } else {
        res.send('Input inválido');
      }
    } else {
      res.send('Input demasiado corto');
    }
  } else {
    res.send('Input inválido');
  }
});

// Iniciamos el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`); // Mensaje genérico
});