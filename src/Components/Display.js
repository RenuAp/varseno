import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper'

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Display = () => {

  return (
    <>
    <h1>Al items </h1>
    <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
    <hr/>
    <TableContainer maxWidth="sm">
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="center">Id</TableCell>
            <TableCell align="center">Title</TableCell>
            <TableCell align="center">Body</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          
            <TableRow>
              <TableCell component="th" scope="row">
               
              </TableCell>
              <TableCell align="center">1</TableCell>
              <TableCell align="center">2</TableCell>
              <TableCell align="center">3</TableCell>
            </TableRow>
       
        </TableBody>
      </Table>
    </TableContainer>
    </>
  )
}

export default Display
