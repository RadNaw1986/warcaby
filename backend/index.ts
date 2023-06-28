import express from 'express';
import cors from 'cors';
import 'express-async-errors';

import { handleError } from "./utils/error";
import './utils/db';
import { gameRouter } from "./routers/game.router";
import userRouter from "./routers/user.router"; // Dodany import routera użytkowników

const app = express();
app.use(cors({
  origin: 'http://localhost:3000',
}));
app.use(express.json());

app.use('/game', gameRouter);
app.use('/users', userRouter); // Dodane użycie routera użytkowników

app.use(handleError);

app.listen(3001, '0.0.0.0', () => {
  console.log('App listening on http://localhost:3001');
});
