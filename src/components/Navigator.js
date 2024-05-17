import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './Navigator.css';
import MainPage from "./MainPage";
import MedicalInsurance from "./Insureance/MedicalInsurance";
import Gallery from "./Gallery/Gallery";

const Navigator = () => {
    return (
        <Router>
            <nav>
                <div className="heading">
                    <h2>Clinic</h2>
                </div>
                <ul className="nav-link">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/insurance">Medical Insurance</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                </ul>
            </nav>

            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/insurance" element={<MedicalInsurance />} />
                <Route path="/gallery" element={<Gallery />} />
            </Routes>    
        </Router>
        
    )
};

export default Navigator;