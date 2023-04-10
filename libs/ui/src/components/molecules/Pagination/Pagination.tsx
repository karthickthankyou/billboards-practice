import { TablePaginationProps } from '@mui/material/TablePagination/TablePagination'

import dynamic from 'next/dynamic'
const TablePagination = dynamic<TablePaginationProps>(() =>
  import('@mui/material/TablePagination/TablePagination').then(
    (module) => module.default,
  ),
)

export interface IPaginationProps {}

export const Pagination = ({
  count,
  page,
  onPageChange,
  rowsPerPage,
  onRowsPerPageChange,
  ...props
}: TablePaginationProps) => (
  <TablePagination
    count={count}
    page={page}
    onPageChange={onPageChange}
    rowsPerPage={rowsPerPage}
    onRowsPerPageChange={onRowsPerPageChange}
    classes={{
      root: 'mt-4',
      displayedRows: 'font-sans',
      selectLabel: 'font-sans',
    }}
    {...props}
  />
)
