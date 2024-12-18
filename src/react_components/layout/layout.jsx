import React from "react";
import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }){
    return(
        <div className="layout_container">
            <Header />
            { children }
            <Footer />
        </div>
    )
}