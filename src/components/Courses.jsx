import "../App.css";
import { useContext } from "react";
import LanguageContext from "../context/LanguageContext";
import javascript from "../assets/cursos/jon-javascript.png";
import react from "../assets/cursos/jon-react.png";
import iniciatec from "../assets/cursos/iniciatec.png";
import henry from "../assets/cursos/henry.png";


const Courses = () => {
  const { texts } = useContext(LanguageContext);

  return (
    <>
      <h2 className="section-title">{texts.coursesTitle}</h2>
      <div className="courses-container">
        <div className="courses-card">
          <div className="imgBx">
          <a
              href="https://www.soyhenry.com/webfullstack"
              target="_blank"
              rel="noreferrer"
            >
            <img src={henry} alt="Curso Henry" />
            </a>
          </div>
          <div className="content">
            <h3>Henry Bootcamp</h3>
            <p>{texts.coursesHenry}</p>
          </div>
        </div>
        <div className="courses-card">
          <div className="imgBx">
          <a
                href="https://www.accenture.com/ar-es/about/responsible-business/iniciatec"
                target="_blank"
                rel="noreferrer">
            <img src={iniciatec} alt="Curso Iniciatec" />
            </a>
          </div>
          <div className="content">
            <h3>Iniciatec</h3>
            <p>{texts.coursesIniciatec}</p>
          </div>
        </div>
        <div className="courses-card">
          <div className="imgBx">
          <a
              href="https://www.youtube.com/playlist?list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA"
              target="_blank"
              rel="noreferrer"
            >
            <img src={javascript} alt="Curso JavaScript" />
            </a>
          </div>
          <div className="content">
            <h3>JavaScript</h3>
            <p>{texts.coursesJavascript}</p>
          </div>
        </div>
        <div className="courses-card">
          <div className="imgBx">
          <a
              href="https://www.youtube.com/playlist?list=PLvq-jIkSeTUZ5XcUw8fJPTBKEHEKPMTKk"
              target="_blank"
              rel="noreferrer"
            >
            <img src={react} alt="Curso React" />
            </a>
          </div>
          <div className="content">
            <h3>React</h3>
            <p>{texts.coursesReact}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;
