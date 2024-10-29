import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import FirstYear from './Pages/FirstYear';
import SecondYear from './Pages/SecondYear';
import ThirdYear from './Pages/ThirdYear';
import FYPstudents from './Pages/FYPstudents';

import './Styles/Pages.css';
import './Styles/Navbar.css';
import './Styles/Footer.css';

const App = () => {
    return (
        <>
            <Navbar />
            <div className="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/first-year" element={<FirstYear />} />
                    <Route path="/second-year" element={<SecondYear />} />
                    <Route path="/third-year" element={<ThirdYear />} />
                    <Route path="/fyp-students" element={<FYPstudents />} />
                </Routes>
            </div>
            <Footer />
        </>
    );
};

export default App;
