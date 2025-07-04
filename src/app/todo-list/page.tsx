'use client';

import React from 'react';
import CheckboxList from './checkboxList';
import {Box, Button, Container} from '@mui/material';
import { useRouter } from 'next/navigation';

export default function Page() {
  return page();
}

const page = () => {
  const router = useRouter();
  return (
    <Container>
      <Box mt={8} p={4} bgcolor="#ffffff" borderRadius={2}>
        <CheckboxList />
      </Box>
      <Box display="flex" justifyContent="center" mt={2}>
        <Button variant="contained" onClick={() => router.push('/todo-list/entry')}>
          {' '}
          To Entry{' '}
        </Button>
      </Box>
    </Container>
  );
};
