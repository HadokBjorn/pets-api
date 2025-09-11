import { Exception } from "@/shared/exceptions/exception";
import httpStatus from "http-status";

export class UnauthorizedException extends Exception {
  constructor(message = "Unauthorized", code = "UNAUTHORIZED") {
    super(message, httpStatus.UNAUTHORIZED, code);
  }
}
