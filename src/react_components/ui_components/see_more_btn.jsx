import React from "react";
import { Link } from "react-router-dom"

import "../../styles/ui_components/see_more_btn.css"

export default function SeeMoreBtn(){
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId)

        if (section){
            section.scrollIntoView({behavior: "smooth"})
        }
    } 
    return(
        <div class="wrap">
            <Link to="#experience" onClick={() => scrollToSection('experience')}>
                <button class="button">See more</button>
            </Link>
        </div>
    )
}