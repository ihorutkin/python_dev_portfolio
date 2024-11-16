import React from "react";
import Layout from "../layout/layout";
import Intro from "../components/intro";

import "../../styles/components/intro.css"
import Experience from "../components/experience";
import Skills from "../components/skills";

export default function MainPage(){
    return (
        <Layout>
            <Intro />
            <Experience />
            <Skills />
        </Layout>
    )
}