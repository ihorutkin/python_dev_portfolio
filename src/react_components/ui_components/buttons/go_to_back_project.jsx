import React from "react";
import { Link } from "react-router-dom"

import "../../../styles/ui_components/buttons/go_to_back_project.css"

export default function GoToBackendProjectBtn({ customClass }){
    return (
        <Link to="/backend_projects" className={`python-projects-btn ${customClass}`}>Go to projects</Link> 
    )
}