import { Exception } from "@/shared/exceptions/exception";
import httpStatus from "http-status";

export class UnprocessableEntityException extends Exception {
  constructor(message = "Unprocessable Entity", code = "UNPROCESSABLE_ENTITY") {
    super(message, httpStatus.UNPROCESSABLE_ENTITY, code);
  }
}
