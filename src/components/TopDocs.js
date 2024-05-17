import React from "react";
import './TopDocs.css';
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";

const TopDocs = ({ docs }) => {
    return (
        <>
            <div className="doctors">
                <Grid container spacing={2} justifyContent="center">
                    {docs.map((doc, id) => (
                        <Grid item key={id}>
                            <Card sx={{ maxWidth: 200, margin: '0 10px'}}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={doc.photo}
                                        alt={doc.photo_description}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {doc.name}
                                        </Typography>
                                        <Typography variant="body" color="text.secondary">
                                            {doc.profession}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
                    
                
            </div>
            
        </>
    )
};

export default TopDocs;