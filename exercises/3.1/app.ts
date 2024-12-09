import express, { ErrorRequestHandler } from "express";
import cors from "cors";

import usersRouter from "./routes/users";
import moviesRouter from "./routes/movies";
import commentsRouter from "./routes/comments";

import authsRouter from "./routes/auths";


const app = express();

const corsOptions = {
  origin: [/^http:\/\/localhost/, "http://amazing.you.com"],
};

app.use(cors(corsOptions));

app.use((_req, _res, next) => {
  console.log(
    "Time:",
    new Date().toLocaleString("fr-FR", { timeZone: "Europe/Brussels" })
  );
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/users", usersRouter);
app.use("/movies", moviesRouter);
app.use("/comments", commentsRouter);
app.use("/auths", authsRouter);


const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  console.error(err.stack);
  return res.status(500).send("Something broke!");
};

app.use(errorHandler);
export default app;
