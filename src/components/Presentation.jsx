import { useContext } from "react";
import "../App.css";
import LanguageContext from "../context/LanguageContext";
import Perfil from "../assets/perfil.png";

const Presentation = () => {
  const { texts } = useContext(LanguageContext);

  return (
    <section className="uno">
      <div className="caja-central">
        <div className="box">
          <div className="contenido">
            <img src={Perfil} alt="Leo Cipollone" />
            <h2>
              Leo Cipollone
              <br />
              <span>Frontend Developer</span>
            </h2>
            <a
              href="https://www.linkedin.com/in/leocipollone/"
              target="_blank"
              rel="noreferrer"
            >
              {texts.presentationButton}
            </a>
          </div>
        </div>

        <div className="caja-presentacion">
          <div>
            <h1 className="section-title">{texts.presentationTitle}</h1>
            <p className="presentacion">
              {texts.presentationOne}
              <br />
              <br />
              {texts.presentationTwo}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Presentation;
