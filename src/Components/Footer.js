import React from 'react';
import '../Styles/Footer.css';  // Ensure CSS for the footer is applied

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
            <div className="social-links">
                <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="mailto:your-email@example.com">Email</a>
            </div>
        </footer>
    );
};

export default Footer;
