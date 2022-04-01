import { AppError } from "../../../../shared/errors/AppError";
import { CarsRepositoryInMemory } from "../../repositories/in-memory/CarsRepositoryInMemory";
import { CreateCarSpecification } from "./CreateCarSpecificationUseCase";

let createCarSpecification: CreateCarSpecification;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("Create Car Specification", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    createCarSpecification = new CreateCarSpecification(carsRepositoryInMemory);
  });

  it("should not be able to add a new specification to a non existent car", async () => {
    expect(async () => {
      const car_id = "1234";
      const specifications_id = ["25410"];
      await createCarSpecification.execute({ car_id, specifications_id });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should be able to add a new specification to the car", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car Name",
      description: "Car description",
      daily_rate: 120,
      license_plate: "AB1C234",
      fine_amount: 60,
      brand: "Car Brand",
      category_id: "category",
    });

    const specifications_id = ["25410"];
    await createCarSpecification.execute({ car_id: car.id, specifications_id });
  });
});
