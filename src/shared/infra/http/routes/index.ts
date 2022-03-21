import { Router } from "express";

import { authenticateRoutes } from "./authenticate.routes";
import { carsRoute } from "./cars.routes";
import { categoriesRoutes } from "./categories.routes";
import { specificationsRoutes } from "./specifications.routes";
import { usersRoutes } from "./users.routes";

const router = Router();

router.use("/categories", categoriesRoutes);
router.use("/specifications", specificationsRoutes);
router.use("/users", usersRoutes);
router.use("/cars", carsRoute);
router.use(authenticateRoutes);

export { router };
