import { FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import React from 'react';

export function Dropdown({
  value: propValue,
  onChange,
}: {
  value?: number;
  onChange?: (event: SelectChangeEvent<number>) => void;
}) {
  return (
    <FormControl
      fullWidth={false}
      sx={{ width: 100, height: 'auto', backgroundColor: '#fff', borderRadius: 2 }}
    >
      <Select value={propValue} onChange={onChange} sx={{ borderRadius: 2 }}>
        <MenuItem value={5}>5</MenuItem>
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={50}>50</MenuItem>
      </Select>
    </FormControl>
  );
}
