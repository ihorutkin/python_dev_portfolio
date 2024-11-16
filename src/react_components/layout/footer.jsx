import React from "react";
import "../../styles/layout/footer.css"
import { Link } from "react-router-dom";


export default function Footer(){
    return(
        <footer className="footer_container">
            <section className="footer">
                <article className="footer_inf">
                    <div className="footer_name">
                        <h2>IHOR</h2>
                        <h2>UTKIN</h2>
                    </div>
                    <div className="contact_inf">
                        <h2>CONTACT INFORMATION</h2>
                        <p>tel: <a href="tel:789-282-788">+48 789 282 788</a></p>
                        <p>email: <a href="mailto: igorutkin2002@gmail.com">igorutkin2002@gmail.com</a></p>
                    </div>
                    <nav className="footer_nav">
                        <Link to="#experience" className="nav_link">experience</Link>
                        <Link to="#skills" className="nav_link">skills</Link>
                        <Link to="#education" className="nav_link">education</Link>
                        <Link to="#contact" className="nav_link">contact</Link>
                    </nav>
                </article>
                <div className="line"></div>
                <article className="footer_social_media">
                    <a href="https://www.linkedin.com/in/ihor-utkin/">
                        <i className="fa-brands fa-linkedin item"></i>
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100042482872993">
                        <i className="fa-brands fa-facebook item"></i>
                    </a>
                    <a href="https://github.com/ihorutkin">
                        <i className="fa-brands fa-github item"></i>
                    </a>
                </article>
            </section>
        </footer>
    )
}