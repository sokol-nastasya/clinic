import { ImageList, ImageListItem } from "@mui/material";
import React from "react";
import galleryData from '../../gallery_data';
import './Gallery.css';

const Gallery = () => {
    return (
        <>
        <div className="gallery" style={{ width: '100%', height: '100%' }}>
            <h2>Our Clinic Instagram &#128525;</h2>
            <ImageList sx={{ width: '100%', height: '100%' }} cols={3} rowHeight="auto">
                {galleryData.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            srcSet={`${item.img}?w=200&h=200&fit=crop&auto=format&dpr=2 2x`}
                            src={`${item.img}?w=200&h=200&fit=crop&auto=format`}
                            alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </div>
        </>
    )
};

export default Gallery;