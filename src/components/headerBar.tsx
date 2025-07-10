'use client';

import { AppBar, Box, Checkbox, FormControlLabel, Toolbar, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { StyledToggleButton, UseThemeContext } from '@/components';

export function HeaderBar() {
  const [isMounted, setIsMounted] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const { setTheme } = UseThemeContext();

  useEffect(() => {
    setIsMounted(true);
    setTheme(isChecked ? 'dark' : 'light');
  }, []);

  if (!isMounted) {
    return null;
  }

  const handleToggle = (isOn: boolean) => {
    setIsChecked(isOn);
    setTheme(isOn ? 'dark' : 'light');
  };

  return (
    <AppBar position="fixed" sx={{ top: 0, left: 0, right: 0 }}>
      <Toolbar sx={{ display: 'flex', alignItems: 'center', minHeight: '64px !important', px: 2 }}>
        <Typography variant="h4" component="div">
          Todo-List Demo
        </Typography>
        <Box sx={{ ml: 'auto', height: 80, display: 'flex', alignItems: 'center' }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={isChecked}
                onChange={(_event, checked) => handleToggle(checked)}
                sx={{
                  color: 'black',
                  '&.Mui-checked': {
                    color: 'black',
                  },
                }}
              />
            }
            label={`Is Checked : ${isChecked}`}
            sx={{
              '.MuiFormControlLabel-label': {
                fontWeight: 'bold',
                fontSize: 18,
              },
            }}
          />
          <StyledToggleButton onChange={handleToggle} checked={isChecked} />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
