import axios from 'axios';

const BASE_URL = 'http://localhost:3001'; // Adres URL naszego serwera backendowego

export const fetchGameData = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/game`);
    return response.data;
  } catch (error) {
    console.error('Błąd podczas pobierania danych gry:', error);
    throw error;
  }
};

export const saveGameData = async (gameData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/game`, gameData);
    return response.data;
  } catch (error) {
    console.error('Błąd podczas zapisywania danych gry:', error);
    throw error;
  }
};

// Funkcja do rejestracji użytkownika
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/register`, userData);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Funkcja do logowania użytkownika
export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, userData);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Funkcja do pobierania informacji o zalogowanym użytkowniku
export const getUserProfile = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/profile`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Funkcja do aktualizacji profilu użytkownika
export const updateUserProfile = async (userData) => {
  try {
    const response = await axios.put(`${BASE_URL}/profile`, userData);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
