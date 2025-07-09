'use client';

import { AppBar, Box, Checkbox, FormControlLabel, Toolbar, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { StyledToggleButton } from '@/components';
import { useThemeContext } from './user-preference-context';

export function HeaderBar() {
  const [isMounted, setIsMounted] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const { setTheme } = useThemeContext();
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const handleToggle = (isOn: boolean) => {
    setIsChecked(isOn);
    setTheme(isOn ? 'dark' : 'light');
    console.log(`Is Checked : ${isOn}`);
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
