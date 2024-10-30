import React, { useState } from 'react';
import '../Styles/ThirdYear.css';

const ThirdYear = () => {
    const [showPersonal, setShowPersonal] = useState(true); // State to toggle between sections

    const personalProjects = [
        { name: "Asylbekov Asanbek", score: 5 },
        { name: "Asylbekov Usonbek", score: 5 },
        { name: "Beyshenov Iskender", score: 5 },
        { name: "Bekeva Jibek", score: 5 },
        { name: "Zhorobaev Ramazan", score: 5 },
        { name: "Zhilkychiyev Tilek", score: 5 },
        { name: "Madzhitova Latifa", score: 5 },
        { name: "Maksatova Marina", score: 5 },
        { name: "Muhammad Hasan Murtaza", score: 5 },
        { name: "Nurbek kyzy Nurbayan", score: 5 },
        { name: "Nurlanbekova Nurshat", score: 5 },
        { name: "Rysmamatov Bayaman", score: 5 },
        { name: "Suerkulova Adeni", score: 5 },
        { name: "Ulukbek kyzy Soledad", score: 5 }
    ];

    const teamProjects = [
        { name: "Team Alpha", score: 5 },
        { name: "Team Bravo", score: 5 },
        { name: "Team Charlie", score: 5 }
    ];

    return (
        <div className="container third-year-page">
            {/* Section Toggle Buttons */}
            <div className="section-toggle">
                <button 
                    className={showPersonal ? "active" : ""} 
                    onClick={() => setShowPersonal(true)}>
                    Personal Projects
                </button>
                <button 
                    className={!showPersonal ? "active" : ""} 
                    onClick={() => setShowPersonal(false)}>
                    Team Projects
                </button>
            </div>

            {/* Projects List */}
            <div className="projects-list">
                {showPersonal ? (
                    <div className="personal-projects">
                        {personalProjects.map((student, index) => (
                            <div key={index} className="project-item">
                                <span className="student-name">{student.name} </span>
                                <div className="progress-bar">
                                    <span className="progress-text">{student.score}%</span>
                                    <div 
                                        className="progress"
                                        style={{ width: `${student.score}%` }}>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="team-projects">
                        {teamProjects.map((team, index) => (
                            <div key={index} className="project-item">
                                <span className="student-name">{team.name}</span>
                                <div className="progress-bar">
                                    <span className="progress-text">{team.score}%</span>
                                    <div 
                                        className="progress"
                                        style={{ width: `${team.score}%` }}>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ThirdYear;
