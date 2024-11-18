import React from "react";
import { useEffect } from "react";
import CV from "../../../CV/Ihor-Utkin-Resume.pdf"

import "../../../styles/ui_components/buttons/load_cv_btn.css"

export default function LoadCvBtn(){
    useEffect(() => {
        const button = document.getElementById("load_cv_button");
    
        const handleClick = () => {
          button.classList.add("onclic");
          setTimeout(validate, 250);
        };
    
        const validate = () => {
          setTimeout(() => {
            button.classList.remove("onclic");
            button.classList.add("validate");
            setTimeout(callback, 450);
          }, 2250);
        };
    
        const callback = () => {
          setTimeout(() => {
            button.classList.remove("validate");
          }, 1250);
        };
    
        button.addEventListener("click", handleClick);
    
        return () => {
          button.removeEventListener("click", handleClick);
        };
      }, []);
    
    return (
        <div class="load_cv_container">
            <a href={CV} id="load_cv_button" download></a>
        </div>
    )
}