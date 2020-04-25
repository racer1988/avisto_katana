"use strict";
const __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    const result = {};
    if (mod != null) for (const k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const compression_1 = __importDefault(require("compression")); // compresses requests
const body_parser_1 = __importDefault(require("body-parser"));
const lusca_1 = __importDefault(require("lusca"));
const express_flash_1 = __importDefault(require("express-flash"));
const path_1 = __importDefault(require("path"));
const gameService = __importStar(require("./services/gameService"));
const initGameService = __importStar(require("./services/initGameService"));
const game_1 = require("./entities/game");
// Create Express server
const app = express_1.default();
// Express configuration
app.set("port", process.env.PORT || 3000);
app.use(compression_1.default());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(express_flash_1.default());
app.use(lusca_1.default.xframe("SAMEORIGIN"));
app.use(lusca_1.default.xssProtection(true));
app.use((req, res, next) => {
    next();
});
app.use(express_1.default.static(path_1.default.join(__dirname, "public"), { maxAge: 31557600000 }));
app.post("/api/players/add", (req, res) => {
    const player = initGameService.addPlayer(req.body.name);
    res.json(player);
});
app.get("/api/players/:id", (req, res) => {
    const player = gameService.getPlayer(req.params.id);
    res.json(player);
});
app.put("/api/players/:id/draw", (req, res) => {
    res.json(gameService.drawCard(req.params.id));
});
app.put("/api/players/:id/drawDiscarded", (req, res) => {
    res.json(gameService.drawDiscarded(req.params.id));
});
app.put("/api/players/:id/hand/:pos/play", (req, res) => {
    res.json(gameService.playCard(req.params.id, (Number)(req.params.pos)));
});
app.put("/api/players/:id/game/:pos/discard", (req, res) => {
    res.json(gameService.discardCard(req.params.id, (Number)(req.params.pos)));
});
app.post("/api/game/endTurn", (req, res) => {
    res.json(gameService.endTurn());
});
app.get("/api/game", (req, res) => {
    res.json(game_1.game);
});
app.post("/api/admin/newGame", (req, res) => {
    initGameService.initGame();
    res.json(game_1.game);
});
app.post("/api/test/players/add5", (req, res) => {
    ["Simone", "Hannah", "Chiara", "Alice", "Alberto"].forEach(n => {
        initGameService.addPlayer(n);
    });
    res.json(game_1.game.players);
});
exports.default = app;
//# sourceMappingURL=app.js.map