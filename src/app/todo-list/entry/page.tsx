'use client';

import Box from '@mui/material/Box';
import { CreateTaskList } from '../../../component/createTaskList';
import { Container } from '@mui/material';

export default function Page() {
  return page();
}

const page = () => {
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
        <CreateTaskList />
      </Box>
    </Container>
  );
};
