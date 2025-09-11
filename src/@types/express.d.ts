import { AuthUser } from "@/shared/interfaces/auth-user.interface";

declare global {
  namespace Express {
    export interface Request {
      user: AuthUser;
      auth_user_id: string;
    }
  }
}
