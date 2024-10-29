import React, { useState } from 'react';
import '../Styles/Pages.css';
import { projectData } from '../Data/Data1year'; // Import data from Data1year.js

const FirstYear = () => {
    const [selectedGroup, setSelectedGroup] = useState('CS - 11');  // Default to CS - 11 group
    const [showIndividual, setShowIndividual] = useState(true);     // State to toggle between individual and team projects

    const groups = ['CS - 11', 'CS - 12', 'CS - 13', 'CS - 14', 'CS - 15', 'CS - 16'];

    return (
        <div className="container first-year-page">
            {/* Group Selection */}
            <div className="group-tabs">
                {groups.map((group) => (
                    <div 
                        key={group} 
                        className={`group-tab ${selectedGroup === group ? 'active' : ''}`} 
                        onClick={() => setSelectedGroup(group)}
                    >
                        {group}
                    </div> 
                ))}
            </div>

            {/* Section Toggle Buttons */}
            <div className="section-toggle">
                <button 
                    className={showIndividual ? "active" : ""} 
                    onClick={() => setShowIndividual(true)}>
                    Individual Projects
                </button>
                <button 
                    className={!showIndividual ? "active" : ""} 
                    onClick={() => setShowIndividual(false)}>
                    Team Projects
                </button>
            </div>

            {/* Projects List */}
            <div className="projects-list">
                {showIndividual ? (
                    <div className="individual-projects">
                        {projectData[selectedGroup].individualProjects.map((student, index) => (
                            <div key={index} className="project-item">
                                <span className="student-name">{student.name}</span>
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
                        {projectData[selectedGroup].teamProjects.map((team, index) => (
                            <div key={index} className="team-item">
                                <h3>{team.team}</h3>
                                <ul>
                                    {team.members.map((member, i) => (
                                        <li key={i}>{member}</li>
                                    ))}
                                </ul>
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

export default FirstYear;
