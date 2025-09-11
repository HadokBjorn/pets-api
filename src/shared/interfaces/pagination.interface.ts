export interface Pagination {
  page?: number;
  limit?: number;
  sort_by?: string;
  order?: "asc" | "desc";
}
