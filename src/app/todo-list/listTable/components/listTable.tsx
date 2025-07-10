'use client';
import { useGetTaskStatus } from '@/hooks/todo-list';
import { TaskRow } from '@/hooks/todo-list/type';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import React from 'react';

type Status = {
  id: number;
  name: string;
};

export function ListTable({ taskRows }: { taskRows: TaskRow[] }) {
  const { status } = useGetTaskStatus();
  const statusArray: Status[] = status as Status[];

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 'bold', fontSize: 20 }}>Title</TableCell>
            <TableCell align="left" sx={{ fontWeight: 'bold', fontSize: 20 }}>
              Status
            </TableCell>
            <TableCell align="left" sx={{ fontWeight: 'bold', fontSize: 20 }}>
              Description
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {taskRows?.length === 0 ? (
            <TableRow>
              <TableCell colSpan={3} align="center">
                No result
              </TableCell>
            </TableRow>
          ) : (
            taskRows?.map((row) => (
              <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component={'th'} scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">
                  {(() => {
                    const name = statusArray.find((s) => s.id === row.statusId)?.name;
                    return name ? name.charAt(0).toUpperCase() + name.slice(1) : row.statusId;
                  })()}
                </TableCell>
                <TableCell align="left">{row.description}</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
