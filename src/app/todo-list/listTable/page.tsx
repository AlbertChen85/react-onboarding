'use client';

import Box from '@mui/material/Box';
import { Container, SelectChangeEvent } from '@mui/material';
import { TodoListPagination } from './components/todoListPagination';
import { ListTable } from './components/listTable';
import { useState } from 'react';
import { Dropdown } from './components/dropdown';
import { useGetTasks } from '@/hooks/todo-list';

export default function Page() {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const { tasks } = useGetTasks({ page: currentPage, size: pageSize });
  const pageCount = Math.ceil((tasks?.total ?? 0) / pageSize) || 1;

  return (
    <Container sx={{ alignItems: 'flex-start', minHeight: '100vh' }}>
      <Box
        mt={8}
        p={4}
        bgcolor="#ffffff"
        borderRadius={2}
        justifyContent="center"
        alignItems="flex-start"
        width="auto"
        height="auto"
        minHeight="80vh"
      >
        <ListTable taskRows={tasks?.data ?? []} />
      </Box>
      <Box mx="auto" display="flex" alignItems="center" mt={2}>
        <Box flex={1} display="flex" justifyContent="center">
          <TodoListPagination count={pageCount} onChange={(_, value) => setCurrentPage(value)} />
        </Box>
        <Box ml="auto">
          <Dropdown
            value={pageSize}
            onChange={(event: SelectChangeEvent<number>) => setPageSize(Number(event.target.value))}
          />
        </Box>
      </Box>
    </Container>
  );
}
