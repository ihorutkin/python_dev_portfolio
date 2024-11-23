import React from "react";

import "../../styles/components/education.css"

export default function Education(){
    return(
        <section className="education_container" id="education">
            <h2 className="container_title" data-aos="fade-right">EDUCATION</h2>
            <article className="education_block">
                <div className="education_item">
                    <div className="education_content">
                        <div className="uniwersity_name_block">
                            <h2 className="university_name" data-aos="fade-right">Andrzej Frycz Modrzewski University</h2>
                            <p className="period_of_study">10/2021 – present</p>
                        </div>
                        <p className="university_text" data-aos="fade-right">During my studies I did programming course
                            in languages such as php, C++ and Java, I
                            learned to work with database using SQL and
                            working with data statistics in R
                        </p>
                    </div>
                    <div className="education_img poland" data-aos="fade-left"></div>
                </div>
                <div className="education_item">
                    <div className="education_content">
                        <div className="uniwersity_name_block">
                            <h2 className="university_name" data-aos="fade-right">Vasilkiv Specialist College Of National Aviation University</h2>
                            <p className="period_of_study">09/2017 – 06/2021</p>
                        </div>
                        <p className="university_text" data-aos="fade-right">During my studies I worked with languages
                            such as C++ and C#, took an advanced course
                            in higher mathematics, analysis mathematics,
                            equations differential, algebra linear,
                            mathematics discrete and theory probability
                        </p>
                    </div>
                    <div className="education_img ukraine" data-aos="fade-left"></div>
                </div>
            </article>
        </section>
    )
}