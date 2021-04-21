export interface Paginator {
  length: number;
  pageIndex: number;
  pageSize: number;
  pageSizeOptions: number[];
  previousPageIndex?: number;
}
