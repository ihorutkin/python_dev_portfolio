import React from "react";
import SeeMoreBtn from "../ui_components/see_more_btn"

export default function Intro(){
    return (
        <div className="intro_container">
            <article className="intro_block">
                <h1 className="intro_title">IHOR UTKIN</h1>
                <p className="intro_content">
                    <p>Python Developer</p>
                    <p>Frontend Developer</p>
                </p>
                <SeeMoreBtn />
            </article>
        </div>
    )
}