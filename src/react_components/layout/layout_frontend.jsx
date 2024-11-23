import React from "react";
import HeaderFrontend from "./header_frontend";
import FooterFrontend from "./footer_frontend";

export default function LayoutFrontend({ children }){
    return(
        <div className="layout_container">
            <HeaderFrontend />
            { children }
            <FooterFrontend />
        </div>
    )
}