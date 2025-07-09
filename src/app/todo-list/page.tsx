'use client';

import React, { useState } from 'react';
import { Box, Button, Container, SelectChangeEvent } from '@mui/material';
import { useRouter } from 'next/navigation';
import { ListTable } from './listTable/components/listTable';
import { TodoListPagination } from './listTable/components/todoListPagination';
import { Dropdown } from './listTable/components/dropdown';
import { useGetTasks } from '@/hooks/todo-list';

export default function Page() {
  return page();
}

const page = () => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const { data: tasks } = useGetTasks({ page: currentPage, size: pageSize });
  const pageCount = Math.ceil((tasks?.total ?? 0) / pageSize) || 1;
  return (
    <Container sx={{ alignItems: 'flex-start', minHeight: '100vh' }} suppressHydrationWarning>
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
        <Box display="flex" justifyContent="center" mt={2}>
          <Button variant="contained" onClick={() => router.push('/todo-list/entry')}>
            To Entry
          </Button>
        </Box>
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
};
