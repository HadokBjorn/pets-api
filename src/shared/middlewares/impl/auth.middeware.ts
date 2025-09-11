import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { Request, Response, NextFunction } from "express";
import { UnauthorizedException } from "../../exceptions";
import prismaUsersRepository from "@/modules/users/repositories/impl/prisma-users.repository";
dotenv.config();

interface UserPayload {
  id: string;
}
export async function authorization(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { authorization } = req.headers;

  const message = "Unauthorized user! make sure you are logged in";

  if (!authorization) {
    throw new UnauthorizedException(message);
  }

  try {
    const token = authorization?.replace("Bearer ", "");

    if (!token) throw new UnauthorizedException(message);

    const { id } = jwt.verify(token, process.env.JWT_SECRET) as UserPayload;

    const user = await prismaUsersRepository.find({ id });

    if (!user) {
      throw new UnauthorizedException(message);
    }

    req.auth_user_id = id;
    req.user = user;

    return next();
  } catch (err) {
    throw new UnauthorizedException("Token expirado ou inválido.");
  }
}
