import joi from "joi";
import { LoginDto } from "../dtos/login.dto";

export const loginSchema = joi.object<LoginDto>({
  email: joi.string().email().required(),
  password: joi.string().min(6).required(),
});
