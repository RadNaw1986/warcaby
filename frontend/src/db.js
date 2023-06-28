/*
Plik zawierający konfigurację połączenia z bazą danych MySQL.
*/

const mysql = require('mysql2');

// Konfiguracja połączenia z bazą danych MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: "",
  database: 'warcaby',
});

module.exports = db;
