import "../App.css";
import { useContext } from "react";
import LanguageContext from "../context/LanguageContext";

const Courses = () => {
  const { texts } = useContext(LanguageContext);

  return (
    <>
      <h2 className="section-title">{texts.coursesTitle}</h2>
      <div className="cursos">
        <ul>
          <li>
            <a
              href="https://www.soyhenry.com/webfullstack"
              target="_blank"
              rel="noreferrer"
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span>Bootcamp Henry Full Stack (700HS)</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.coursera.org/professional-certificates/diseno-de-experiencia-del-usuario-ux-de-google"
              target="_blank"
              rel="noreferrer"
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span>
                {texts.coursesGoogle}
                <br />
                (240HS)
              </span>
            </a>
          </li>
          <li>
            <a
              href="https://open-bootcamp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span>
                Open Bootcamp Front-End Development
                <br />
                (120HS)
              </span>
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/playlist?list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA"
              target="_blank"
              rel="noreferrer"
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span>{texts.coursesJavascript} (60HS)</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/playlist?list=PLvq-jIkSeTUZ5XcUw8fJPTBKEHEKPMTKk"
              target="_blank"
              rel="noreferrer"
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span>
                {texts.coursesReact}
                <br />
                (40HS)
              </span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Courses;
