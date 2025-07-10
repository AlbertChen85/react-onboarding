import { Box, Pagination, PaginationProps } from '@mui/material';
import React from 'react';

type BasePaginationProps = PaginationProps;

export function TodoListPagination({ ...props }: BasePaginationProps) {
  return (
    <Box mt={2} display="flex" justifyContent="center" alignItems="flex-start">
      <Pagination
        {...props}
        variant="outlined"
        color="primary"
        sx={{
          '& .MuiPaginationItem-root': {
            color: 'white',
          },
        }}
      ></Pagination>
    </Box>
  );
}
