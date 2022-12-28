export interface SimplePaginationProps {
  firstPage: number;
  lastPage: number;
  currPage: number;
  onPageChange: (page: number) => void;
}
