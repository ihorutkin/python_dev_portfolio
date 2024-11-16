import React from "react";
import { Link } from "react-router-dom";
import LoadCvBtn from "../ui_components/load_cv_btn";

import "../../styles/layout/header.css"

export default function Header(){
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="navigation_container">
            <nav className="navigation">
                <Link to="#experience" className="nav_link" onClick={() => scrollToSection('experience')}>experience</Link>
                <Link to="#skills" className="nav_link" onClick={() => scrollToSection('skills')}>skills</Link>
                <Link to="#education" className="nav_link" onClick={() => scrollToSection('education')}>education</Link>
                <Link to="#contact" className="nav_link" onClick={() => scrollToSection('contact')}>contact</Link>
            </nav>
            <LoadCvBtn />
        </div>
    )
}