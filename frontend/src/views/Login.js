import React, { useState } from 'react';

// Komponent reprezentujący formularz logowania
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Obsługa zmiany pola nazwy użytkownika
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  // Obsługa zmiany pola hasła
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Obsługa zatwierdzenia formularza
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logika logowania
    console.log('Zalogowano:', username, password);
    // Resetowanie pól formularza
    setUsername('');
    setPassword('');
  };

  return (
    <div className="login">
      <h1>Logowanie</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nazwa użytkownika:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <label>
          Hasło:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <button type="submit">Zaloguj</button>
      </form>
    </div>
  );
};

export default Login;
