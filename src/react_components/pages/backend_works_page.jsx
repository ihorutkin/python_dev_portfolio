import React from "react";
import LayoutBackend from "../layout/layout_backend";
import ProjectItem from "../components/project_item";
import { python_projects } from "../../models/python_works";

import "../../styles/pages/backend_works_page.css"
import GoToHome from "../ui_components/buttons/go_to_home";


export default function BackendWorksPage(){
    return (
        <LayoutBackend>
            <GoToHome />
            <section className="backend_works_container">
                <h2 className="projects_title" id="backend">PYTHON PROJECTS</h2>
                <div className="backend_works_block">
                {
                    python_projects.map((elem, index) => {
                        return <ProjectItem
                            key={ index }
                            name={ elem.name }
                            is_image = { elem.isImage }
                            image = { elem.image }
                            description = { elem.description }
                            github_link = { elem.github_link }
                            is_demo = { elem.isDemo }
                            demo_link = { elem.demo_link }
                            project_type = { elem.projectType }
                        />
                    })
                }
                </div>
            </section>
        </LayoutBackend>
    )
}