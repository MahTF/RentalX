import { AppError } from "../../../../shared/errors/AppError";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { UsersRepositoryInMemory } from "../../repositories/inMemory/UsersRepositoryInMemory";
import { CreateUserUseCase } from "../createUser/CreateUserUseCase";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

let authenticateUserUseCase: AuthenticateUserUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;

describe("Authenticate user", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    authenticateUserUseCase = new AuthenticateUserUseCase(
      usersRepositoryInMemory
    );
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
  });

  it("should be able to authenticate an user", async () => {
    const user: ICreateUserDTO = {
      name: "User Test",
      email: "user@test.com",
      password: "1234",
      driver_license: "123123",
    };

    await createUserUseCase.execute(user);

    const result = await authenticateUserUseCase.execute({
      email: user.email,
      password: user.password,
    });

    expect(result).toHaveProperty("token");
  });

  it("Should not be able to authenticate a nonexisting user", async () => {
    expect(async () => {
      await authenticateUserUseCase.execute({
        email: "email@email.com",
        password: "0000",
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("Should not be able to authenticate an user with incorrect password", async () => {
    expect(async () => {
      const user: ICreateUserDTO = {
        name: "User Test",
        email: "user@test.com",
        password: "1234",
        driver_license: "123123",
      };

      createUserUseCase.execute(user);

      await authenticateUserUseCase.execute({
        email: user.email,
        password: user.password + 1,
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
