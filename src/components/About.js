import React, { useState } from "react";
import Button from '@mui/material/Button';
import './About.css';
import { Box, Modal, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";


function createData(name, location) {
    return { name, location }; 
};

const rows = [
    createData('Clinic LA', 'Beverly Hills - 987 Rodeo Drive, Beverly Hills, CA 90210'),
    createData('Clinic New York', 'Central Park - 123 Central Park West, New York, NY 10023'),
    createData('Clinic Boston', 'Harvard Square - 456 Massachusetts Avenue, Cambridge, MA 02138')
]

const About = () => {
    const [open, setOpen] = useState(false);
    
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <div className="about">
                <Button variant="contained" onClick={handleOpen}>Sign up</Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box className="modal" sx={{ bgcolor: 'background.paper'}}>
                        <Typography id="modal-modal-title" variant="h5" component="h2">
                            You can call us
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Our numbers: 
                             LA - 98745639485
                             NY - 98743935472
                             B  - 948756739485
                        </Typography>
                    </Box>
                </Modal>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Clinic</TableCell>
                                <TableCell align="right">Location</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.location}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

            </div>
        </>
    )
};

export default About;