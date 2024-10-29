import React from 'react';
import '../Styles/FYPstudents.css';

const FYPstudents = () => {
    const students = [
        { name: "Kanbolotov Edelbek", topic: "Information mortal for Tourism company (Web app)", score: 40 },
        { name: "Shakirov Niyaz", topic: "Cinema management system (Desktop app)", score: 30 },
        { name: "Mamatkerimova Aidai", topic: "Car dealer management system (Desktop app)", score: 60 },
        { name: "Mukanbetova Kunduz", topic: "Web application for construction company (Web app)", score: 70 },
        { name: "Egemberdiev Aitbek", topic: "Informational portal for gym (Web app)", score: 50 },
        { name: "Zamirbekov Mirlan", topic: "Online store for shoes (Web app)", score: 60 },
        { name: "Omurgazieva kyzy Asel", topic: "Online store (Mobile app)", score: 50 },
        { name: "Almanbetov Nurmukhambet", topic: "Online store for car parts (Web app)", score: 30 },
        { name: "Kolbaev Daniyar", topic: "Informational portal for game (Web app)", score: 80 }
    ];

    return (
        <div className="container fyp-page">
            <h1>Final Year Students' Projects</h1>

            {/* Projects List */}
            <div className="projects-list">
                {students.map((student, index) => (
                    <div key={index} className="project-item">
                        <div className="project-details">
                            <span className="student-name">{student.name}</span>
                            <span className="project-topic">{student.topic}</span>
                        </div>
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
        </div>
    );
};

export default FYPstudents;
