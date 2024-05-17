import React from 'react';
import './MainPage.css';
import Banner from './Banner';
import About from './About';
import TopDocs from './TopDocs';
import topDocs_data from '../topDocs_data';

const MainPage = () => {
    return (
        <>
            <Banner />
            <About />
            <TopDocs docs={topDocs_data} />
            
           
        </>
    )
    
};

export default MainPage;