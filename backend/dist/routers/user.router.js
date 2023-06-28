"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = require("../utils/db");
const userRouter = express_1.default.Router();
userRouter.post('/users', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        const query = 'INSERT INTO users (username, password) VALUES (?, ?)';
        const values = [username, password];
        const result = yield db_1.pool.query(query, values);
        console.log('Użytkownik został dodany!');
        const insertId = result.insertId;
        res.status(201).json({ id: insertId });
    }
    catch (error) {
        console.error('Błąd podczas dodawania użytkownika:', error);
        res.status(500).json({ error: 'Wystąpił błąd serwera' });
    }
}));
exports.default = userRouter;
//# sourceMappingURL=user.router.js.map