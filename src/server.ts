import express from "express";
import swaggerUi from "swagger-ui-express";
import "reflect-metadata";

import { router } from "./routes";
import swaggerConfigs from "./swagger.json";
import "./database";
import "./shared/container";

const app = express();
const port = 3333;

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerConfigs));

app.use("/", router);

app.listen(port, () => console.log(`Server running on port: ${port}`));
