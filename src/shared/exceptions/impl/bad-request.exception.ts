import { Exception } from "@/shared/exceptions/exception";
import httpStatus from "http-status";

export class BadRequestException extends Exception {
  constructor(message = "Bad Request", code = "BAD_REQUEST") {
    super(message, httpStatus.BAD_REQUEST, code);
  }
}
