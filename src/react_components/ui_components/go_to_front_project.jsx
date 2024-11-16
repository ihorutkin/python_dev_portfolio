import React from "react";
import { Link } from "react-router-dom"

import "../../styles/ui_components/go_to_front_project.css"

export default function GoToFrontendProjectBtn({ customClass }){
    return (
        <Link to="/frontend_projects" className={`python-projects-btn ${customClass}`}>Go to projects</Link> 
    )
}