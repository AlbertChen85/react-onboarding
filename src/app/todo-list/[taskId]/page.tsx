'use client';

import { Box, Container } from '@mui/material';
import React from 'react';
import { UpdateTaskList } from './components/updateTaskList';
import { useGetTask } from '@/hooks/todo-list';
import { useParams } from 'next/navigation';

export default function Page() {
  const params = useParams();
  const taskId = params.taskId as string;

  const { data: task } = useGetTask({ taskId: taskId });
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
        minHeight={'80vh'}
      >
        {task && <UpdateTaskList taskId={taskId} defaultRow={task} />}
      </Box>
    </Container>
  );
}
