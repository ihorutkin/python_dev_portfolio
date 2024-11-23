import React from "react";
import LayoutFrontend from "../layout/layout_frontend";
import ProjectItem from "../components/project_item";
import { layout_projects, game_projects, app_projects } from "../../models/frontend_works";

import "../../styles/pages/frontend_works_page.css"
import GoToHome from "../ui_components/buttons/go_to_home";

export default function FrontendWorksPage(){
    return (
        <LayoutFrontend>
            <GoToHome />
            <section className="frontend_works_container">
                <h2 className="projects_title" id="layout">LAYOUTS</h2>
                <div className="frontend_works_block">
                {
                    layout_projects.map((elem, index) => {
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
                <h2 className="projects_title" id="game">GAMES</h2>
                <div className="frontend_works_block">
                {
                    game_projects.map((elem, index) => {
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
                <h2 className="projects_title" id="app">APPS</h2>
                <div className="frontend_works_block">
                {
                    app_projects.map((elem, index) => {
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
        </LayoutFrontend>
    )
}