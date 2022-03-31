import { ICreateCarDTO } from "../dtos/ICreateCarDTO";
import { Car } from "../infra/typeorm/entities/Car";

interface ICarsRepository {
  create({
    name,
    description,
    daily_rate,
    license_plate,
    fine_amount,
    brand,
    category_id,
  }: ICreateCarDTO): Promise<Car>;
  findByLicensePlate(licence_plate): Promise<Car>;
  findAvailable(
    name?: string,
    brand?: string,
    category_id?: string
  ): Promise<Car[]>;
}

export { ICarsRepository };
