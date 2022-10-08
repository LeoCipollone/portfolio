import { createContext, useState } from "react";

const LanguageContext = createContext();

const initialLanguage = "es"
const translations = {
    es: {
        selectLanguage: "Idioma",
        presentationTitle: "¡Bienvenido!",
        presentationParagraph: "Desarrollador Front End",
        presentationButton: "Contrátame",
        aboutTitle: "Sobre mí",
        aboutParagraphOne: "Soy de Argentina 🇦🇷. Desde mi infancia me fascinaban los videojuegos y queria entender como se creaban. Eso hizo que más adelante en mi adolescencia me comenzara a interesar más por la tecnología y luego descubriera la programación.",
        aboutParagraphTwo: 'Escribí mi primer "Hola Mundo" allá por 2019 intentando crear una App para Android, pero mejor no te cuento como terminó 🤣. Actualmente me dedico a hacer proyectos Freelance, mientras desarrollo día a día mis conocimientos en este inmenso y apasionante mundo de la programación.',
        resume: "Curriculum Vitae",
        resumeSpanishButton: "Español",
        resumeEnglishButton: "Inglés",
        techsTitle: "Lenguajes y Herramientas",
        techsParagraph: "Estas son algunas de las tecnologías de las que tengo conocimiento.",
        coursesTitle: "Cursos",
        coursesHenry: "Bootcamp Full Stack con metodologías ágiles (scrum) (700HS)",
        coursesIniciatec: "Bootcamp Front End impartido por Accenture y MindHub (304HS)",
        coursesJavascript: "Curso de Javascript de Jon Mircha",
        coursesReact: "Curso de React.js de Jon Mircha",
        projectsTitle: "Proyectos",
        projectTitle03: "Calculadora",
        projectParagraph01: "Landing Page corporativa desarrollada en CSS y Javascript.",
        projectParagraph02: "Buscador de peliculas y series, desarrollado en CSS, React y Redux. (WIP)",
        projectParagraph03: "App de calculadora con modo oscuro y claro desarrollada en CSS y Javascript.",
        projectParagraph04: "ChatBot desarrollado en React, para el hackathon de OpenBootcamp.",
        projectsButton01: "Repositorio",
        projectsButton02: "Demo",
        footerTitle: "Contacto",
        footerParagraph01: "Hecho con ",
        footerParagraph02: " por Leo",
        copyright: "Todos los derechos reservados",
    },
    en: {
        selectLanguage: "Language",
        presentationTitle: "Welcome!",
        presentationButton: "Hire me",
        presentationParagraph: "Front End Developer",
        aboutTitle: "About me",
        aboutParagraphOne: "I am from Argentina 🇦🇷. Since my childhood I was fascinated by video games and wanted to understand how they were created. That made me more interested in technology later in my teens and then I discovered programming.", 
        aboutParagraphTwo: 'I wrote my first "Hello World" back in 2019 trying to create an Android App, I better not tell you how it ended 🤣. Currently I do Freelance projects, while I develop my knowledge day by day in this immense and exciting world of programming.', 
        resume: "Resume",
        resumeSpanishButton: "Spanish",
        resumeEnglishButton: "English",
        techsTitle: "Languages and Tools",
        techsParagraph: "These are some of the technologies I have knowledge of",
        coursesTitle: "Courses",
        coursesHenry: "Full Stack Bootcamp with agile methodologies (scrum) (700HS)",
        coursesIniciatec: "Front End Bootcamp taught by Accenture and MindHub (304HS)",
        coursesJavascript: "Javascript course by Jon Mircha (60HS)",
        coursesReact: "React.js course by Jon Mircha (40HS)",
        projectsTitle: "Projects",
        projectTitle03: "Calculator",
        projectParagraph01: "Landing Page developed in CSS and Javascript.",
        projectParagraph02: "Movie and series search engine, developed in CSS, React and Redux. (WIP)",
        projectParagraph03: "Calculator app with dark and light mode developed in CSS and Javascript.",
        projectParagraph04: "ChatBot developed in React, for OpenBootcamp hackathon.",
        projectsButton01: "Repository",
        projectsButton02: "Website",
        footerTitle: "Contact",
        footerParagraph01: "Made with ",
        footerParagraph02: " by Leo",
        copyright: "All rights reserved",
    }
}

const LanguageProvider = ({children}) => {
    const [language, setLanguage] = useState(initialLanguage);
    const [texts, setTexts] = useState(translations[language]);

    const handleLanguage = (e) => {
        if (e.target.value === "es") {
            setLanguage("es")
            setTexts(translations.es);
        } else {
            setLanguage("en");
            setTexts(translations.en);
        }
    }

    const data = { texts, handleLanguage };

    return (
        <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
    )
}

export {LanguageProvider};
export default LanguageContext;