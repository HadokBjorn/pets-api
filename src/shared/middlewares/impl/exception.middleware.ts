import { Exception } from "@/shared/exceptions/exception";
import { FastifyError, FastifyReply, FastifyRequest } from "fastify";

export const exceptionMiddleware = (
  error: FastifyError & Partial<Exception>,
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const issuedAt = new Date();

  console.error(`[${issuedAt.toISOString()}]`, error);

  const statusCode = error.statusCode ?? 500;
  const message = error.statusCode ? error.message : "Internal Server Error";
  const code = error.code ?? "INTERNAL_SERVER_ERROR";

  return reply.status(statusCode).send({ message, statusCode, code });
};
