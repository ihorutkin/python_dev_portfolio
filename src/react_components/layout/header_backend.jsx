import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoadCvBtn from "../ui_components/buttons/load_cv_btn";

import "../../styles/layout/header.css"

export default function HeaderBackend(){
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
                        to="#backend"
                        className="nav_link"
                        onClick={(event) => {
                            scrollToSection('education')
                            closeModal(event)
                        }}
                    >backend projects</Link>
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
                <Link to="#backend" className="nav_link" onClick={() => scrollToSection('backend')}>backend projects</Link>
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