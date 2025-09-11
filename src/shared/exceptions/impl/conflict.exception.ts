import { Exception } from "@/shared/exceptions/exception";
import httpStatus from "http-status";

export class ConflictException extends Exception {
  constructor(message = "Conflict", code = "CONFLICT") {
    super(message, httpStatus.CONFLICT, code);
  }
}
