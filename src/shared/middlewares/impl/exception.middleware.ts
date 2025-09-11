import { Exception } from "@/shared/exceptions/exception";
import { NextFunction, Request, Response } from "express";

export const exceptionMiddleware = (
  error: Error & Partial<Exception>,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const issuedAt = new Date();

  console.error(`[${issuedAt.toISOString()}]`, error);

  const statusCode = error.statusCode ?? 500;
  const message = error.statusCode ? error.message : "Internal Server Error";
  const code = error.code ?? "INTERNAL_SERVER_ERROR";

  return res.status(statusCode).json({ message, statusCode, code });
};
