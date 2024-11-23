import React from "react";
import FooterBackend from "./footer_backend";
import HeaderBackend from "./header_backend";

export default function LayoutBackend({ children }){
    return(
        <div className="layout_container">
            <HeaderBackend />
            { children }
            <FooterBackend />
        </div>
    )
}