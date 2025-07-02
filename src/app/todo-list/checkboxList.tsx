"use client";

import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';

export default function CheckboxList() {
    const [checkedTodoIdList, setCheckedTodoIdList] = React.useState<string[] | null>(null);

    const handleToggle = (selectTodoId: string | number) => () => {
        const id = String(selectTodoId);
        setCheckedTodoIdList(checkedTodoIdList?.includes(id)
            ? checkedTodoIdList.filter((todoId) => id !== todoId)
            : [...(checkedTodoIdList ?? []), id]
        );
    };

    return (
        <List sx={{ width: '100%' }}>
            {Array.from(Array(4).keys()).map((keys) => {
                const labelId = `checkbox-list-label-${keys}`;
                const key = String(keys);

                return (
                    <ListItem
                        key={key}
                        disablePadding
                        sx={{ border: '1px solid #e0e0e0', borderRadius: 1, mb: 1 }}
                    >
                        <ListItemButton role={undefined} onClick={handleToggle(key)} dense>
                            <ListItemIcon>
                                <Checkbox
                                    edge="start"
                                    checked={checkedTodoIdList?.includes(key) ?? false}
                                    tabIndex={-1}
                                    disableRipple
                                    slotProps={{ input: { 'aria-labelledby': labelId } }}
                                />
                            </ListItemIcon>
                            <ListItemText id={labelId} primary={`Line item ${keys + 1}`} slotProps={{ primary: { style: { color: 'black' } } }} />
                        </ListItemButton>
                    </ListItem>
                );
            })}
        </List>
    );
}
