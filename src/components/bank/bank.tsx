import React, { useEffect } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useAppDispatch } from '../../app/hooks';
import { getBanks } from './bankApi';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { saveBanks } from './bankSlice';


export function Bank() {
    const dispatch = useAppDispatch()

    const banks = useSelector((state: RootState) => state.banks);
    const data = banks.data;
    
    useEffect(() => {
        if(data.length === 0){
           callService();
        }
    }, [])

    const callService = async() => {
        const banks = await getBanks()
        dispatch(saveBanks(banks));
    }
    
    return (
        <div>
            <h1>Table of Banks</h1>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Bank Name</TableCell>
                        <TableCell align="center">Description</TableCell>
                        <TableCell align="center">Age</TableCell>
                        <TableCell align="center">Url</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row, index) => (
                            <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.bankName}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {row.description}
                                </TableCell>
                                <TableCell align="right">{row.age}</TableCell>
                                <TableCell align="right">{row.url}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}
