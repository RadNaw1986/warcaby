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
Object.defineProperty(exports, "__esModule", { value: true });
exports.gameRouter = void 0;
const express_1 = require("express");
const game_record_1 = require("../records/game.record");
const validate_move_1 = require("../utils/validate-move");
const error_1 = require("../utils/error");
exports.gameRouter = (0, express_1.Router)()
    .post('/create-new-game', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const game = new game_record_1.GameRecord(req.body);
    yield game.insertNewGame();
    res.json(game);
}))
    .post('/update-game-state', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { startRow, startCol, endRow, endCol, playerColor } = req.body;
    const game = new game_record_1.GameRecord(req.body);
    if (!(0, validate_move_1.validateMove)(game.gameBoard, startRow, startCol, endRow, endCol, playerColor))
        throw new error_1.ValidationError('Nieprawidłowy ruch!');
    yield game.updateGameState();
    res.json(game);
}));
//# sourceMappingURL=game.router.js.map