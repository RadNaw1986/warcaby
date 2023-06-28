/*
Plik zawierający definicje tras na naszej planszy (endpoints) dla rejestracji, logowania i innych operacji.
*/

const express = require('express');
const router = express.Router();
const db = require('./db');

// Definicja ścieżek (endpoints) dla aplikacji
router.get('/players', (req, res) => {
  // Logika pobierania listy graczy z bazy danych
  db.query('SELECT * FROM players', (err, results) => {
    if (err) {
      res.status(500).send('Błąd serwera');
    } else {
      res.status(200).json(results);
    }
  });
});

router.post('/players', (req, res) => {
  const { name } = req.body;

  // Logika dodawania nowego gracza do bazy danych
  db.query('INSERT INTO players (name) VALUES (?)', [name], (err, result) => {
    if (err) {
      res.status(500).send('Błąd serwera');
    } else {
      res.status(201).send('Gracz dodany');
    }
  });
});

module.exports = router;
