'use client';

import { AppBar, Toolbar, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

export function HeaderBar() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return headerBar();
}

const headerBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Todo-List
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
