import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner">
            <Card sx={{ maxWidth: 500 }}>
                <CardActionArea>
                    <CardMedia 
                        component="img"
                        height="200"
                        image="/clinic_b.jpg"
                        alt="main clinic photo"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="div">
                            Clinic
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Welcome to our state-of-the-art clinic website, 
                            where compassionate care meets cutting-edge technology. 
                            From routine check-ups to specialized treatments, 
                            our expert team is dedicated to providing personalized 
                            healthcare solutions tailored to your needs.
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
};

export default Banner;