import express from "express";
import swaggerUi from "swagger-ui-express";

import { router } from "./routes";
import swaggerConfigs from "./swagger.json";

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerConfigs));

app.use("/", router);

app.listen(3333);
