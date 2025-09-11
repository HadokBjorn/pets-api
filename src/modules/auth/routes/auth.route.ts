import { createUserSchema } from "@/modules/users/schemas/create-user.schema";
import validateSchema from "@/shared/middlewares/impl/validate-schema.middleware";
import { Router } from "express";
import { loginSchema } from "../schemas/login.schema";
import authController from "../controllers/auth.controller";

const authRotes = Router();

authRotes.post(
  "/signup",
  validateSchema(createUserSchema),
  authController.signup
);
authRotes.post("/login", validateSchema(loginSchema), authController.login);

export default authRotes;
