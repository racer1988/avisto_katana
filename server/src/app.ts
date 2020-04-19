import express from "express";
import compression from "compression";  // compresses requests
import session from "express-session";
import bodyParser from "body-parser";
import lusca from "lusca";
import flash from "express-flash";
import path from "path";
import { SESSION_SECRET } from "./util/secrets";

import * as deckService from "./services/deckService";
import * as playerService from "./services/playerService";
import * as gameService from "./services/gameService";
import { game } from "./entities/game";

// Create Express server
const app = express();


// Express configuration
app.set("port", process.env.PORT || 3000);
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: SESSION_SECRET,
}));
app.use(flash());
app.use(lusca.xframe("SAMEORIGIN"));
app.use(lusca.xssProtection(true));

app.use((req, res, next) => {
    next();
});

app.use(
    express.static(path.join(__dirname, "public"), { maxAge: 31557600000 })
);

app.get("/api/decks/:id/shuffle", (req, res) => {
    deckService.shuffle(req.params.id);
    res.json();
});

app.get("/api/decks/:id/draw", (req, res) => {
    const card = deckService.draw(req.params.id);
    res.json({
        card: card ? card.cardName : ""
    });
});

app.get("/api/decks/:id/reset", (req, res) => {
    deckService.reset(req.params.id);
    res.json();
});

app.get("/api/decks/:id/content", (req, res) => {
    const cards = deckService.content(req.params.id);
    res.json({ cards: cards });
});

app.post("/api/players/add", (req, res) => {
    const player = playerService.add(req.body.name);
    res.json(player);
});

app.get("/api/players/:id", (req, res) => {
    const player = playerService.getPlayer(req.params.id);
    res.json(player);
});

app.put("/api/players/:id/draw", (req, res) => {
    const player = playerService.drawCard(req.params.id);
    res.json(player);
});

app.put("/api/players/:id/playCard/:pos", (req, res) => {
    res.json(playerService.playCard(req.params.id, (Number)(req.params.pos)));
});

app.post("/api/game/endTurn", (req, res) => {
    res.json(gameService.endTurn());
});

app.get("/api/game", (req, res) => {
    res.json(game);
});

app.post("/api/admin/newGame", (req, res) => {
    gameService.newGame();
    res.json(game);
});

app.post("/api/test/players/add5", (req, res) => {
    ["Simone", "Hannah", "Chiara", "Alice", "Alberto"].forEach(n => {
        playerService.add(n);
    });
    res.json(game.players);
});

export default app;