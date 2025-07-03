"use client";

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Checkbox from '@mui/material/Checkbox';
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import React, { useEffect } from 'react'
import { StyledToggleButton } from '@/component'
import FormControlLabel from '@mui/material/FormControlLabel';

export default function HeaderBar() {
    const [isMounted, setIsMounted] = React.useState(false);
    const [isChecked, setIsChecked] = React.useState(false);

    useEffect(() => { setIsMounted(true) }, []);

    if (!isMounted) {
        return null;
    }

    const handleToggle = (isOn: boolean) => {
        setIsChecked(isOn);
        console.log(`Is Checked : ${isOn}`);
    };

    return (
        <AppBar position="fixed" sx={{ top: 0, left: 0, right: 0 }}>
            <Toolbar sx={{ display: 'flex', alignItems: 'center', minHeight: '64px !important', px: 2 }}>
                <Typography variant="h4" component="div">
                    Toggle Demo
                </Typography>
                <Box sx={{ ml: 'auto', height: 80, display: 'flex', alignItems: 'center' }}>
                    <FormControlLabel
                        control={<Checkbox checked={isChecked} sx={{ display: 'none' }} />}
                        label={`Is Checked : ${isChecked}`}
                        sx={{
                            '.MuiFormControlLabel-label': {
                                fontWeight: 'bold',
                                fontSize: 18
                            }
                        }}
                    />
                    <StyledToggleButton onChange={handleToggle} />
                </Box>
            </Toolbar>
        </AppBar>
    )
}