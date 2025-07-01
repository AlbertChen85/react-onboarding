"use client";

import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';

export default function CheckboxList() {
    const [checked, setChecked] = React.useState([-1]);

    const handleToggle = (value: number) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    return (
        <List sx={{ width: '100%' }}>
            {[0, 1, 2, 3].map((value) => {
                const labelId = `checkbox-list-label-${value}`;

                return (
                    <ListItem
                        key={value}
                        disablePadding
                        sx={{ border: '1px solid #e0e0e0', borderRadius: 1, mb: 1 }}
                    >
                        <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
                            <ListItemIcon>
                                <Checkbox
                                    edge="start"
                                    checked={checked.includes(value)}
                                    tabIndex={-1}
                                    disableRipple
                                    slotProps={{ input: { 'aria-labelledby': labelId } }}
                                />
                            </ListItemIcon>
                            <ListItemText id={labelId} primary={`Line item ${value + 1}`} slotProps={{ primary: { style: { color: 'black' } } }} />
                        </ListItemButton>
                    </ListItem>
                );
            })}
        </List>
    );
}
