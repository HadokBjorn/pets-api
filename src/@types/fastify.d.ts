import "fastify";
import { AuthUser } from "@/shared/interfaces/auth-user.interface";

declare module "fastify" {
  interface FastifyRequest {
    user?: AuthUser;
    auth_user_id?: string;
  }
}
