import { TextField, Button } from "@mui/material";
import React from "react";
import './MedicalInsurance.css';

const MedicalInsurance = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Form Submited");
    }

    return (
        <>
        <div className="container">
            <h2>Your medical Insurance</h2>
            <form autoComplete="off" onSubmit={handleSubmit}>
                <TextField required id="outlined-basic" label="Name" variant="outlined" fullWidth sx={{ mb: 2 }} />
                <TextField required id="outlined-basic" label="Surname" variant="outlined" fullWidth sx={{ mb: 2 }} />
                <TextField required id="outlined-basic" type="date" fullWidth sx={{ mb: 2 }} />
                <TextField required id="outlined-basic" label="Email" variant="outlined" fullWidth sx={{ mb: 2 }} />
                <TextField
                    required
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    fullWidth
                    sx={{ mb: 2 }}
                />
                <TextField
                    id="outlined-textarea"
                    label="Comments"
                    placeholder="You can leave your comment here"
                    multiline fullWidth
                    sx={{ mb: 2 }}
                />
                <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>

            </form>

            {/* <Box 
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField required id="outlined-basic" label="Name" variant="outlined" />
                <TextField required id="outlined-basic" label="Surname" variant="outlined" />
                <TextField required id="outlined-basic" label="Birth date" type="number" />
                <TextField required id="outlined-basic" label="Email" variant="outlined" />
                <TextField
                    required
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                />
                <TextField
                    id="outlined-textarea"
                    label="Comments"
                    placeholder="You can leave your comment here"
                    multiline
                />
                <Button>Submit</Button>
            </Box> */}
        </div>
        </>
    )
};

export default MedicalInsurance;