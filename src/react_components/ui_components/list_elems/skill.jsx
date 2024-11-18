import React from "react";

import "../../../styles/ui_components/list_elems/skill.css"

export default function Skill(props){
    return (
        <li className="skill_elem">
            <div 
                className={`skill_icon ${props.additionalClass || ""}`}
                style={props.style}
            ></div>
            <p className="skill_name">{ props.name }</p>
        </li>
    )
}