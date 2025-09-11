import express, { json } from "express";
import "express-async-errors";
import dotenv from "dotenv";
import cors from "cors";
import httpStatus from "http-status";
import { exceptionMiddleware } from "./shared/middlewares";
import routes from "./routes";

const app = express();
dotenv.config();
app.use(json());
app.use(cors());
app.use(routes);
app.use(exceptionMiddleware);
const PORT = process.env.PORT || 5000;

app.get("/health", (req, res) =>
  res.send("Tudo certinho com a API😎 ").status(httpStatus.OK)
);

app.listen(PORT, () => console.log(`Server online in port: ${PORT}`));
