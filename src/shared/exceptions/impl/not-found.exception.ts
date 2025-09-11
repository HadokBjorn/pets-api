import { Exception } from "@/shared/exceptions/exception";
import httpStatus from "http-status";

export class NotFoundException extends Exception {
  constructor(message = "Not Found", code = "NOT_FOUND") {
    super(message, httpStatus.NOT_FOUND, code);
  }
}
