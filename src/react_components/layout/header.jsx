import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoadCvBtn from "../ui_components/buttons/load_cv_btn";

import "../../styles/layout/header.css"

export default function Header(){
    const [modal, setModal] = useState(false)

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const bar = document.getElementsByClassName('fa-bars')[0]

    function closeModal(e){
        bar.classList.toggle("fa-xmark")
        setModal(!modal)
    }

    return (
        <div className="navigation_container projects">
            {modal && (
                <article className="modal_menu">
                    <nav className="modal_list">
                    <Link 
                        to="#experience" 
                        className="nav_link" 
                        onClick={(event) => {
                            scrollToSection('experience')
                            closeModal(event)
                        }}
                    >experience</Link>
                    <Link 
                        to="#skills" 
                        className="nav_link" 
                        onClick={(event) => {
                            scrollToSection('skills')
                            closeModal(event)
                        }}
                    >skills</Link>
                    <Link 
                        to="#education" 
                        className="nav_link" 
                        onClick={(event) => {
                            scrollToSection('education')
                            closeModal(event)
                        }}
                    >education</Link>
                    <Link 
                        to="#contact" 
                        className="nav_link" 
                        onClick={(event) => {
                            scrollToSection('footer')
                            closeModal(event)
                        }}
                    >contact</Link>
                    </nav>
                </article>
            )}
            <nav className="navigation">
                <Link to="#experience" className="nav_link" onClick={() => scrollToSection('experience')}>experience</Link>
                <Link to="#skills" className="nav_link" onClick={() => scrollToSection('skills')}>skills</Link>
                <Link to="#education" className="nav_link" onClick={() => scrollToSection('education')}>education</Link>
                <Link to="#contact" className="nav_link" onClick={() => scrollToSection('footer')}>contact</Link>
            </nav>
            <i className="fa-solid fa-bars" onClick={(event) => {
                event.target.classList.toggle("fa-xmark")
                setModal(!modal)
            }}></i>
            <LoadCvBtn />
        </div>
    )
}