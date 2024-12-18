import React from "react";

import "../../styles/components/experience.css"
import GoToBackendProjectBtn from "../ui_components/buttons/go_to_back_project";
import GoToFrontendProjectBtn from "../ui_components/buttons/go_to_front_project"

export default function Experience(){
    return (
        <section id="experience" className="experience_container">
            <article className="experience_title_block">
                <div className="container_title_block">
                    <h2 className="container_title" data-aos="fade-right">EXPERIENCE</h2>
                    <div className="container_title_line"></div>
                </div>
                <div className="project_block">
                    <div className="python_projects_content">
                        <div className="python_projects_title_block">
                            <h2 className="python_projects_title" data-aos="fade-right">Python</h2>
                        </div>
                        <p className="experience_text" data-aos="fade-right">Throughout my studies and work experience, 
                                                    I have gained hands-on expertise in developing 
                                                    applications using Django, Django Rest Framework, 
                                                    and FastAPI. I am also proficient in working with 
                                                    databases, particularly PostgreSQL, and have 
                                                    applied my knowledge in data collection (Scrapy, Selenium), 
                                                    analysis and processing (Pandas), as well as data 
                                                    visualization (Matplotlib).
                        </p>
                        <div className="go_to_project_btn_block" data-aos="fade-right">
                            <GoToBackendProjectBtn />
                        </div>
                    </div>
                    <div className="python_projects_block" data-aos="fade-left"></div>
                </div>
                <div className="project_block frontend">
                    <div className="frontend_projects_block" data-aos="fade-right"></div>
                    <div className="frontend_projects_content">
                        <div className="frontend_projects_title_block">
                            <h2 className="python_projects_title" data-aos="fade-left">Frontend</h2>
                        </div>
                        <p className="experience_text" data-aos="fade-left">I have the necessary experience of working on frontend
                                                        projects, including more than 6 site templates, 2 games written
                                                        in JS and React.js, as well as 3 applications (weather, animated
                                                        graph and an application for creating a color palette). You can
                                                        familiarize yourself with all the projects by following the links
                        </p>
                        <div className="go_to_project_btn_block" data-aos="fade-left">
                            <GoToFrontendProjectBtn customClass="go_to_frontend_projects_btn" />
                        </div>
                    </div>
                </div>
            </article>
        </section>
    )
}