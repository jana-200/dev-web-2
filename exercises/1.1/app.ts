import express from "express";

import moviesRouter from "./routes/movies";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/movies", moviesRouter);

export default app;
