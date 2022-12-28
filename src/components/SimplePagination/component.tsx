import { Pagination } from "react-bootstrap";

import { SimplePaginationProps } from "./interface";

export const SimplePagination = ({
  currPage,
  firstPage,
  lastPage,
  onPageChange,
}: SimplePaginationProps) => (
  <Pagination className="mt-3 d-flex justify-content-center">
    <Pagination.First
      disabled={currPage === firstPage}
      onClick={() => onPageChange(firstPage)}
    />
    <Pagination.Prev
      disabled={currPage === firstPage}
      onClick={() => onPageChange(currPage - 1)}
    />
    <Pagination.Item active>{currPage}</Pagination.Item>
    <Pagination.Next
      disabled={currPage === lastPage}
      onClick={() => onPageChange(currPage + 1)}
    />
    <Pagination.Last
      disabled={currPage === lastPage}
      onClick={() => onPageChange(lastPage)}
    />
  </Pagination>
);

SimplePagination.defaultProps = {
  firstPage: 1,
};
