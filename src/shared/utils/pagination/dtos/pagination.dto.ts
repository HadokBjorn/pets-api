export class PaginationDto {
  page?: number;
  limit?: number;
  sortBy?: string;
  order?: "asc" | "desc";
}
