import React from "react";
import Skill from "../ui_components/list_elems/skill";

import "../../styles/components/skills.css"

import { python_icons, frontend_icons } from "../../models/import_icons";

export default function Skills(){
    const python_skills = [
        'Python', 'Django', 'Django Rest Framework', 'Fast API', 'Celery', 'Redis',
        'Django ORM', 'PostgreSQL', 'asyncio', 'Pandas', 'Matplotlib', 'Scrapy',
        'Selenium', 'JWT token', 'pytest', 'jupiter notebook', 'postman',
    ]
    
    const frontend_skills = [
        'JavaScript', 'Node.js', 'React', 'Next.js', 'Chart.js', 'i18n', 'Tailwind',
        'HTML', 'CSS', 'SCSS/LESS', 'Bootstrap', 'Docker', 'Git',
    ]

    return(
        <section className="skills_container" id="skills">
            <article className="container_title_block">
                <h2 className="container_title" data-aos="fade-right">MY EXPERTISE</h2>
                <div className="container_title_line"></div>
            </article>
            <article className="skills_block_list">
                <article className="skills_block">
                    <div className="python_skills">
                        <div className="skill_title_block">
                            <h2 className="skills_title" data-aos="fade-right">Python</h2>
                            <div className="skill_logo_python" data-aos="fade-right"></div>
                        </div>
                        <ul>
                            {
                                python_skills.map((elem, index) => {
                                    return <Skill
                                        key={index} 
                                        name={elem} 
                                        style={{
                                            backgroundImage: `url(${python_icons[index]})`,
                                            backgroundSize: "cover",
                                        }}
                                    ></Skill>
                                })
                            }
                        </ul>
                    </div>
                    <div className="frontend_skills">
                        <div className="skill_title_block frontend_line">
                            <h2 className="skills_title" data-aos="fade-left">Frontend</h2>
                            <div className="skill_logo_frontend" data-aos="fade-left"></div>
                        </div>
                         <ul>
                            { 
                                frontend_skills.map((elem, index) => {
                                    return <Skill 
                                        key={index}
                                        name={elem} 
                                        style={{
                                            backgroundImage: `url(${frontend_icons[index]})`,
                                            backgroundSize: "cover",
                                        }}
                                    ></Skill>
                                })
                            }
                        </ul>
                    </div>
                </article>
            </article>
        </section>
    )
}