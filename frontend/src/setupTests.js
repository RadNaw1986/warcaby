const mysql = require('mysql2');

// Funkcja do konfiguracji połączenia testowego z bazą danych MySQL
const setupTestDatabase = async () => {
  const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'warcaby',
  });

  // Logika tworzenia tabel i przygotowania bazy danych testowej

  // Zwrócenie połączenia z bazą danych
  return db;
};

module.exports = setupTestDatabase;
