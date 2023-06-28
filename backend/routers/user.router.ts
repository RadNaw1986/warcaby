import express from 'express';
import { pool } from '../utils/db';

const userRouter = express.Router();

userRouter.post('/users', async (req, res) => {
  try {
    const { username, password } = req.body;

    const query = 'INSERT INTO users (username, password) VALUES (?, ?)';
    const values = [username, password];

    const result = await pool.query(query, values);
    console.log('Użytkownik został dodany!');
    const insertId = (result as any).insertId;
    res.status(201).json({ id: insertId });
  } catch (error) {
    console.error('Błąd podczas dodawania użytkownika:', error);
    res.status(500).json({ error: 'Wystąpił błąd serwera' });
  }
});

export default userRouter;
