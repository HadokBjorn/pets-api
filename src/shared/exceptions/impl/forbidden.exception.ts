import { Exception } from "@/shared/exceptions/exception";
import httpStatus from "http-status";

export class ForbiddenException extends Exception {
  constructor(message = "Forbidden", code = "FORBIDDEN") {
    super(message, httpStatus.FORBIDDEN, code);
  }
}
