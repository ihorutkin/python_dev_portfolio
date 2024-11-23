import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoadCvBtn from "../ui_components/buttons/load_cv_btn";

import "../../styles/layout/header.css"

export default function HeaderFrontend(){
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
        <div className="navigation_container">
            {modal && (
                <article className="modal_menu">
                    <nav className="modal_list">
                    <Link 
                        to="#layout" 
                        className="nav_link" 
                        onClick={(event) => {
                            scrollToSection('experience')
                            closeModal(event)
                        }}
                    >layouts</Link>
                    <Link 
                        to="#game" 
                        className="nav_link" 
                        onClick={(event) => {
                            scrollToSection('skills')
                            closeModal(event)
                        }}
                    >games</Link>
                    <Link 
                        to="#game" 
                        className="nav_link" 
                        onClick={(event) => {
                            scrollToSection('education')
                            closeModal(event)
                        }}
                    >apps</Link>
                    <Link 
                        to="#app"
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
                <Link to="#layout" className="nav_link" onClick={() => scrollToSection('layout')}>layouts</Link>
                <Link to="#game" className="nav_link" onClick={() => scrollToSection('game')}>games</Link>
                <Link to="#app" className="nav_link" onClick={() => scrollToSection('app')}>apps</Link>
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