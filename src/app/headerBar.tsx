"use client";

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import React, { useEffect } from 'react'
import { StyledToggleButton } from '@/component'

export default function HeaderBar() {
    const [isMounted, setIsMounted] = React.useState(false);
    const [logMessage, setLogMessage] = React.useState("");

    useEffect(() => { setIsMounted(true) }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <AppBar position="fixed" sx={{ top: 0, left: 0, right: 0 }}>
            <Toolbar sx={{ display: 'flex', alignItems: 'center', minHeight: '64px !important', px: 2 }}>
                <Typography variant="h4" component="div">
                    Toggle Demo
                </Typography>
                <Box sx={{ ml: 'auto', height: 80, display: 'flex', alignItems: 'center' }}>
                    <h6 style={{ marginRight: 20, minWidth: 100 }}>
                        {logMessage}
                    </h6>
                    <StyledToggleButton onChange={isOn => {
                        setLogMessage(`Toggle is ${isOn}`);
                        console.log(`Toggle is ${isOn}`);
                    }} />
                </Box>
            </Toolbar>
        </AppBar>
    )
}