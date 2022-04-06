import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

import {useDispatch} from 'react-redux';
import {deleteData} from '../store/slices/dataActions';

const TableComponent = ({ data }) => {

    const dispatch = useDispatch();

    const handleDelete = (id) => {
        //   console.log(id);
        dispatch(deleteData(id));
    }

    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell align="right">Employee Name</TableCell>
                            <TableCell align="right">Employee Salary</TableCell>
                            <TableCell align="right">Employee Age</TableCell>
                            <TableCell align="right">Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell align="right">{row.employee_name}</TableCell>
                                <TableCell align="right">{row.employee_salary}</TableCell>
                                <TableCell align="right">{row.employee_age}</TableCell>
                                <TableCell align="right"><IconButton style={{color:'red'}} onClick={() => handleDelete(row.id)} aria-label="delete" size="large">
                                    <DeleteIcon />
                                </IconButton></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default TableComponent