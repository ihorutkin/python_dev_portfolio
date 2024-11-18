import React from "react";
import SeeMoreBtn from "../ui_components/buttons/see_more_btn"

import "../../styles/components/intro.css"

export default function Intro(){
    return (
        <div className="intro_container">
            <div className="intro_img"></div>
            <article className="intro_block">
                <h1 
                    className="intro_title" 
                    data-aos="zoom-in"
                    data-aos-duration="800"
                >IHOR UTKIN</h1>
                <p 
                    className="intro_content" 
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                >
                    <p>Python Developer</p>
                    <p>Frontend Developer</p>
                </p>
                <SeeMoreBtn />
            </article>
        </div>
    )
}