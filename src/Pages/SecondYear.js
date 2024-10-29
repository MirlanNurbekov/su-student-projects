import React, { useState } from 'react';
import '../Styles/SecondYear.css';
import { projectData } from '../Data/Data2year'; // Import the data

const SecondYear = () => {
    const [selectedGroup, setSelectedGroup] = useState('CS - 21');  // State to keep track of selected group
    const [showIndividual, setShowIndividual] = useState(true);     // State to toggle between individual and team projects

    const groups = ['CS - 21', 'CS - 22', 'CS - 23', 'CS - 24', 'CS - 25'];

    return (
        <div className="container second-year-page">

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
                                <div className="team-details">
                                    <h3 className="team-name">{team.team}</h3>
                                    <p className="team-description">{team.description}</p>
                                    <ul className="team-members">
                                        {team.members.map((member, i) => (
                                            <li key={i}>{member}</li>
                                        ))}
                                    </ul>
                                </div>
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

export default SecondYear;
