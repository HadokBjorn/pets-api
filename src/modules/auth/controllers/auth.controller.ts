import { CreateUserDto } from "@/modules/users/dtos/create-user.dto";
import { LoginDto } from "../dtos/login.dto";
import { Request, Response } from "express";
import httpStatus from "http-status";
import signupUseCase from "../usecases/signup.usecase";
import loginUseCase from "../usecases/login.usecase";

class AuthController {
  async signup(req: Request<object, object, CreateUserDto>, res: Response) {
    const data = req.body;
    const result = await signupUseCase.execute(data);

    return res.status(httpStatus.CREATED).json(result);
  }

  async login(req: Request<object, object, LoginDto>, res: Response) {
    const data = req.body;
    const result = await loginUseCase.execute(data);

    return res.status(httpStatus.OK).json(result);
  }
}
export default new AuthController();
