import express, { ErrorRequestHandler } from "express";
import cors from "cors";

import booksRouter from "./routes/books";
import authsRouter from "./routes/auths";
import usersRouter from "./routes/users";



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

app.use("/books", booksRouter);
app.use("/auths", authsRouter);
app.use("/users", usersRouter);


const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  console.error(err.stack);
  return res.status(500).send("Something broke!");
};

app.use(errorHandler);
export default app;
