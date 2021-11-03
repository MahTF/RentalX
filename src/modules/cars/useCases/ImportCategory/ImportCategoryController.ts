import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateCategoryUseCase } from "../createCategory/CreateCategoryUseCase";

class ImportCategoryController {
  handle(request: Request, response: Response) {
    const { file } = request;
    const importCategoryUseCase = container.resolve(CreateCategoryUseCase);

    importCategoryUseCase.execute(file);
    return response.status(201).send();
  }
}

export { ImportCategoryController };
