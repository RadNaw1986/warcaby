"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require("express-async-errors");
const error_1 = require("./utils/error");
require("./utils/db");
const game_router_1 = require("./routers/game.router");
const user_router_1 = __importDefault(require("./routers/user.router")); // Dodany import routera użytkowników
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: 'http://localhost:3000',
}));
app.use(express_1.default.json());
app.use('/game', game_router_1.gameRouter);
app.use('/users', user_router_1.default); // Dodane użycie routera użytkowników
app.use(error_1.handleError);
app.listen(3001, '0.0.0.0', () => {
    console.log('App listening on http://localhost:3001');
});
//# sourceMappingURL=index.js.map