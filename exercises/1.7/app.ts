import express from "express";

import moviesRouter from "./routes/movies";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/movies", moviesRouter);

let count = 0; // Compteur de requêtes GET

// Middleware pour compter les requêtes GET
app.use((req, _res, next) => {
  if (req.method === "GET") {
    count++; // Incrémente le compteur
    console.log(`GET counter: ${count}`);
  }
  next(); // Passe à la route suivante
});

export default app;
