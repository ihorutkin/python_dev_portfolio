import online_school_dashboard from "../media/projects/backend/online_school_dashboard.jpg"
import scrapy_img from "../media/projects/backend/scrapy.jpg"
import default_python_img from "../media/projects/backend/backend_projects.jpg"

export const python_projects = [
    {
        name: "Online school dashboard",
        isImage: true,
        image: online_school_dashboard,
        description: "This is a dashboard for an online English language school where teachers (admins) can use authorization and authentication oparations also you have oportunity to crate, delete and update information about students, groups and lessons",
        github_link: "https://github.com/ihorutkin/online_school/",
        isDemo: true,
        demo_link: "https://online-english-school.onrender.com/",
        projectType: "Python project"
    },
    {
        name: "Theater service API",
        isImage: false,
        image: default_python_img,
        description: "API for a theater in your local city. The idea is to allow visitors of the Theatre to make Reservations online and choose needed seats, without going physically to the Theatre.",
        github_link: "https://github.com/ihorutkin/theatre-api-service/tree/develop",
        isDemo: false,
        demo_link: "https://github.com/ihorutkin/theatre-api-service/tree/develop",
        projectType: "Python project"
    },
    {
        name: "Library service API",
        isImage: false,
        image: default_python_img,
        description: "Developed an online management system for book borrowings utilizing Django and Django Rest Framework",
        github_link: "https://github.com/Narberal90/library-service-app/",
        isDemo: false,
        demo_link: "https://github.com/Narberal90/library-service-app/",
        projectType: "Python project"
    },
    {
        name: "theprotocol.it data analysis",
        isImage: false,
        image: scrapy_img,
        description: "Service for searching and analyzing current IT vacancies",
        github_link: "https://github.com/ihorutkin/protocolit_data_analysis/",
        isDemo: false,
        demo_link: "https://github.com/ihorutkin/protocolit_data_analysis/",
        projectType: "Python project"
    },
]