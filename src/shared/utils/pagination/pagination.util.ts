import { Pagination } from "@/shared/interfaces/pagination.interface";

interface PaginateResult {
  skip: number;
  take: number;
  orderBy?: Record<string, "asc" | "desc">;
}

class PaginationUtil {
  buildParams(params: Pagination): PaginateResult {
    const {
      page = 1,
      limit = 10,
      sort_by = "criado_em",
      order = "desc",
    } = params;

    const sanitizedLimit = Math.min(Math.max(limit, 1), 100);
    const sanitizedPage = Math.max(page, 1);
    const skip = (sanitizedPage - 1) * sanitizedLimit;

    const result: PaginateResult = {
      skip,
      take: sanitizedLimit,
    };

    if (sort_by) {
      result.orderBy = { [sort_by]: order };
    }

    return result;
  }
}

export default new PaginationUtil();
