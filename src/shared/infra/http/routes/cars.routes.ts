import { Router } from "express";

import { CreateCarController } from "../../../../modules/cars/useCases/createCar/CreateCarController";

const carsRoute = Router();

const createCarsController = new CreateCarController();

carsRoute.post("/", createCarsController.handle);

export { carsRoute };
