import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../Styles/Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const isActive = (path) => {
        return location.pathname === path ? "active-link" : "";
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                {/* Logo */}
                <div className="navbar-logo">
                    <Link to="/" onClick={() => setIsOpen(false)}>
                        <img src="/Images/SU-logo-white.png" alt="SU Logo" />
                    </Link>
                </div>

                {/* Hamburger Menu Icon */}
                <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>

                {/* Navigation Links */}
                <div className={`nav-links ${isOpen ? 'open' : ''}`}>
                    <Link to="/" className={isActive('/')} onClick={() => setIsOpen(false)}>Home</Link>
                    <Link to="/first-year" className={isActive('/first-year')} onClick={() => setIsOpen(false)}>First Year Students</Link>
                    <Link to="/second-year" className={isActive('/second-year')} onClick={() => setIsOpen(false)}>Second Year Students</Link>
                    <Link to="/third-year" className={isActive('/third-year')} onClick={() => setIsOpen(false)}>Third Year Students</Link>
                    <Link to="/fyp-students" className={isActive('/fyp-students')} onClick={() => setIsOpen(false)}>Final Year Students</Link>
                    <Link to="/contact" className={isActive('/contact')} onClick={() => setIsOpen(false)}>Contact</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
