import React from "react";

import "../../styles/components/skills.css"

export default function Skills(){
    let skills = ['Python', 'Django', 'Django Rest Framework', 'Fast API', 'Celery', 'Redis', 'Django ORM', 'PostgreSQL', 'asyncio', 'JavaScript', 'Node.js', 'React', 'Next.js', 'Scrapy', 'Selenium', 'Pandas', 'Matplotlib', 'Chart.js', 'i18n', 'Tailwind', 'HTML/CSS/SCSS/LESS', 'JWT token', 'Bootstrap', 'Docker', 'Git', 'unit testing', 'Statistics', 'linear algebra']

    return(
        <section className="skills_container">
            <div className="container_title_block">
                <h2 className="container_title">MY SKILLS</h2>
                <div className="container_title_line"></div>
            </div>
        </section>
    )
}