import "../App.css";
import { useContext } from "react";
import LanguageContext from "../context/LanguageContext";
import Sorin from "../images/proyectos/corporativa.png";
import TuPeli from "../images/proyectos/movies.png";
import Calculadora from "../images/proyectos/calculadora.png";

const Projects = () => {
  const { texts } = useContext(LanguageContext);

  return (
    <section className="tres">
      <h2 className="section-title">{texts.projectsTitle}</h2>
      <div className="proyectos">
        <div className="card">
          <div className="imgBx">
            <img src={Sorin} alt="Proyecto01" />
          </div>
          <div className="content">
            <h3>Bolsas Sorin S.R.L</h3>
            <p>{texts.projectParagraph01}</p>
            <button>
              <a
                href="https://github.com/LeoCipollone/ds-sorin-bolsas"
                target="_blank"
                rel="noreferrer"
              >
                {texts.projectsButton01}
              </a>
            </button>
            <button>
              <a
                href="https://leocipollone.github.io/ds-sorin-bolsas"
                target="_blank"
                rel="noreferrer"
              >
                {texts.projectsButton02}
              </a>
            </button>
          </div>
        </div>
        <div className="card">
          <div className="imgBx">
            <img src={TuPeli} alt="Proyecto02" />
          </div>
          <div className="content">
            <h3>TuPeli</h3>
            <p>{texts.projectParagraph02}</p>
            <button>
              <a
                href="https://github.com/LeoCipollone/movies"
                target="_blank"
                rel="noreferrer"
              >
                {texts.projectsButton01}
              </a>
            </button>
            <button>
              <a
                href="https://leocipollone.github.io/movies/"
                target="_blank"
                rel="noreferrer"
              >
                {texts.projectsButton02}
              </a>
            </button>
          </div>
        </div>
        <div className="card">
          <div className="imgBx">
            <img src={Calculadora} alt="Proyecto03" />
          </div>
          <div className="content">
            <h3>{texts.projectTitle03}</h3>
            <p>{texts.projectParagraph03}</p>
            <button>
              <a
                href="https://github.com/LeoCipollone/calculator"
                target="_blank"
                rel="noreferrer"
              >
                {texts.projectsButton01}
              </a>
            </button>
            <button>
              <a
                href="https://leocipollone.github.io/calculator/"
                target="_blank"
                rel="noreferrer"
              >
                {texts.projectsButton02}
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
