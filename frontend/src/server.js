/*Główny plik serwera Node.js, który będzie obsługiwał żądania HTTP i komunikację z bazą danych.*/

const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const mysql = require('./db');
const path = require('path');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Konfiguracja połączenia z bazą danych
const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'warcaby',
};

// Nawiązanie połączenia z bazą danych
const connection = mysql.createConnection(dbConfig);
connection.connect((err) => {
  if (err) {
    console.error('Błąd połączenia z bazą danych MySQL', err);
  } else {
    console.log('Połączono z bazą danych MySQL');
  }
});

// Obsługa żądania dla ścieżki głównej
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

// Rejestracja ścieżek (endpoints) dla aplikacji
app.use('/', routes);

// Start serwera
app.listen(3000, () => {
  console.log('Serwer działa na porcie 3000');
});
