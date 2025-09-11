import joi from "joi";
import { CreateUserDto } from "../dtos/create-user.dto";

export const createUserSchema = joi.object<CreateUserDto>({
  name: joi.string().min(3).required(),
  image: joi.string().uri().optional(),
  email: joi.string().email().required(),
  password: joi.string().min(6).required(),
});
