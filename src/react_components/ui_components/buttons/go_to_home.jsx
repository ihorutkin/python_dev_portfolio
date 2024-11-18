import React from "react";
import { Link } from "react-router-dom";

import "../../../styles/ui_components/buttons/go_to_home.css"

export default function GoToHome(){
    return (
        <Link to="/" className="go_to_home_btn">←</Link>
    )
}