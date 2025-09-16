import { PaginationDto } from "./dtos/pagination.dto";

interface PaginateResult {
  skip: number;
  take: number;
  orderBy?: Record<string, "asc" | "desc">;
}

class PaginationUtil {
  buildParams(params: PaginationDto): PaginateResult {
    const {
      page = 1,
      limit = 10,
      sortBy = "createdAt",
      order = "desc",
    } = params;

    const sanitizedLimit = Math.min(Math.max(limit, 1), 100);
    const sanitizedPage = Math.max(page, 1);
    const skip = (sanitizedPage - 1) * sanitizedLimit;

    const result: PaginateResult = {
      skip,
      take: sanitizedLimit,
    };

    if (sortBy) {
      result.orderBy = { [sortBy]: order };
    }

    return result;
  }
}

export default new PaginationUtil();
