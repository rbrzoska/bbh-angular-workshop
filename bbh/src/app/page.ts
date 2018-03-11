export interface Page<T> {
  total: number;
  page: number;
  data: T[];
}
