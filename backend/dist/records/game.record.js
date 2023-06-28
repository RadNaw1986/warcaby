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
exports.GameRecord = void 0;
const uuid_1 = require("uuid");
const db_1 = require("../utils/db");
class GameRecord {
    constructor(obj) {
        this.sessionId = obj.sessionId;
        this.player1 = obj.player1;
        this.player1Nick = obj.player1Nick;
        this.player2 = obj.player2;
        this.player2Nick = obj.player2Nick;
        this.gameBoard = obj.gameBoard;
        this.currentMove = obj.currentMove;
    }
    insertNewGame() {
        return __awaiter(this, void 0, void 0, function* () {
            this.sessionId = (0, uuid_1.v4)();
            this.player1 = (0, uuid_1.v4)();
            this.player2 = (0, uuid_1.v4)();
            const firstPlayer = Math.floor(Math.random() * 2 + 1);
            if (firstPlayer === 2) {
                const tmpPlayer = this.player1;
                const tmpNick = this.player1Nick;
                this.player1 = this.player2;
                this.player1Nick = this.player2Nick;
                this.player2 = tmpPlayer;
                this.player2Nick = tmpNick;
            }
            this.gameBoard = '0,B,0,B,0,B,0,B,B,0,B,0,B,0,B,0,0,B,0,B,0,B,0,B,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,W,0,W,0,W,0,W,0,0,W,0,W,0,W,0,W,W,0,W,0,W,0,W,0';
            this.currentMove = 1;
            yield db_1.pool.execute("INSERT INTO `game_sessions`(`sessionId`, `player1`, `player1Nick`, `player2`, `player2Nick`, `gameBoard`, `currentMove`) VALUES (:sessionId, :player1, :player1Nick, :player2, :player2Nick, :gameBoard, :currentMove)", this);
        });
    }
    updateGameState() {
        return __awaiter(this, void 0, void 0, function* () {
            this.currentMove = this.currentMove === 1 ? 2 : 1;
            //@TODO nie zmienia ruchu
            yield db_1.pool.execute("UPDATE `game_sessions` SET `gameBoard` = :gameBoard, `currentMove` = :currentMove WHERE `sessionId` = :sessionId", {
                gameBoard: this.gameBoard,
                currentMove: this.currentMove,
                sessionId: this.sessionId,
            });
        });
    }
}
exports.GameRecord = GameRecord;
//# sourceMappingURL=game.record.js.map