import "../App.css";
import { useContext } from "react";
import Tilt from 'react-parallax-tilt';
import LanguageContext from "../context/LanguageContext";
import Corporativa from "../assets/images/projects/corporativa.png";
import Movies from "../assets/images/projects/movies.png";
import Calculadora from "../assets/images/projects/calculadora.png";
import ChatBot from "../assets/images/projects/chatbot.png";

const Cards = () => {
  const { texts } = useContext(LanguageContext);

  return (
    <section className="tres">
      <h2 className="section-title">{texts.projectsTitle}</h2>
      <div className="projects-container">
        <Tilt tiltReverse={true}>
        <div className="cardWrap">
          <div className="card">
            <div
              className="cardBg"
              style={{
                backgroundImage: `url(${Corporativa})`,
              }}
            ></div>
            <div className="cardInfo">
              <h3 className="cardTitle">Bolsas Sorin S.R.L</h3>
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
        </div>
        </Tilt>
        <Tilt tiltReverse={true}>
        <div className="cardWrap">
          <div className="card">
            <div
              className="cardBg"
              style={{
                backgroundImage: `url(${Movies})`,
              }}
            ></div>
            <div className="cardInfo">
              <h3 className="cardTitle">TuPeli</h3>
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
        </div>
        </Tilt>
        <Tilt tiltReverse={true}>
        <div className="cardWrap">
          <div className="card">
            <div
              className="cardBg"
              style={{
                backgroundImage: `url(${Calculadora})`,
              }}
            ></div>
            <div className="cardInfo">
              <h3 className="cardTitle">{texts.projectTitle03}</h3>
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
        </Tilt>
        <Tilt tiltReverse={true}>
        <div className="cardWrap">
          <div className="card">
            <div
              className="cardBg"
              style={{
                backgroundImage: `url(${ChatBot})`,
              }}
            ></div>
            <div className="cardInfo">
              <h3 className="cardTitle">PrograMate</h3>
              <p>{texts.projectParagraph04}</p>
              <button>
              <a
                href="https://github.com/LeoCipollone/programate"
                target="_blank"
                rel="noreferrer"
              >
                {texts.projectsButton01}
              </a>
            </button>
            <button>
              <a
                href="https://programate.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                {texts.projectsButton02}
              </a>
            </button>
            </div>
          </div>
        </div>
        </Tilt>
      </div>
    </section>
  );
};

export default Cards;
