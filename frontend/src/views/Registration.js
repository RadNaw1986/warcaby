import React, { useState } from 'react';

// Komponent reprezentujący formularz rejestracji
const Registration = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Obsługa zmiany pola nazwy użytkownika
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  // Obsługa zmiany pola hasła
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Obsługa zmiany pola potwierdzenia hasła
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  // Obsługa zatwierdzenia formularza
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logika rejestracji
    console.log('Zarejestrowano:', username, password);
    // Resetowanie pól formularza
    setUsername('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="registration">
      <h1>Rejestracja</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nazwa użytkownika:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <label>
          Hasło:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <label>
          Potwierdź hasło:
          <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
        </label>
        <button type="submit">Zarejestruj</button>
      </form>
    </div>
  );
};

export default Registration;
