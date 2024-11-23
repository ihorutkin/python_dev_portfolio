import React from "react";
import Layout from "../layout/layout";
import Intro from "../components/intro";
import Experience from "../components/experience";
import Skills from "../components/skills";
import AOS from "aos"

import "../../styles/components/intro.css"
import Education from "../components/education";

export default function MainPage(){
    AOS.init()
    return (
        <div style={{overflow: "hidden"}}>
            <Layout>
                <Intro />
                <Experience />
                <Skills />
                <Education />
            </Layout>
        </div>
    )
}