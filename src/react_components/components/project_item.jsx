import React from "react";

import "../../styles/components/project_item.css"
import { Link } from "react-router-dom";

export default function ProjectItem(props){
    return (
        <Link to={props.demo_link} className={`project_item_container ${props.style}`}>
            <div className="project_item_img_block">
                <div
                    className="project_item_img"
                    style={{
                        backgroundImage: `url(${props.image})`,
                        backgroundSize: "cover",
                    }}
                ></div>
            </div>
            <div className="project_item_content">
                <h2>{ props.name }</h2>
                <Link 
                    to={`${props.github_link}`}
                    className="animated-button"
                >
                    <span className="button-text">{ props.project_type }</span>
                    <span className="button-arrow">→</span>
                </Link>
            </div>
        </Link>
    )
}