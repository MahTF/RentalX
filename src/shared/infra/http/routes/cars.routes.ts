import { Router } from "express";

import { CreateCarController } from "../../../../modules/cars/useCases/createCar/CreateCarController";
import { ListAvailableCarsController } from "../../../../modules/cars/useCases/ListAvailableCars/ListAvailableCarsController";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const carsRoute = Router();

const createCarsController = new CreateCarController();
const listAvailableCarsController = new ListAvailableCarsController();

carsRoute.post(
  "/",
  ensureAuthenticated,
  ensureAdmin,
  createCarsController.handle
);

carsRoute.get("/available", listAvailableCarsController.handle);

export { carsRoute };
