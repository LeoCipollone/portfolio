import "../App.css";
import { useContext } from "react";
import LanguageContext from "../context/LanguageContext";
import HTML from "../images/tecnologias/html.png";
import CSS from "../images/tecnologias/css.png";
import JavaScript from "../images/tecnologias/javascript.png";
import React from "../images/tecnologias/react.png";
import GIT from "../images/tecnologias/git.png";
import Redux from "../images/tecnologias/redux.png";
import TypeScript from "../images/tecnologias/typescript.png";
import Sass from "../images/tecnologias/sass.png";
import Bootstrap from "../images/tecnologias/bootstrap.png";

const Techs = () => {
  const { texts } = useContext(LanguageContext);

  return (
    <>
      <h2 className="section-title">{texts.techsTitle}</h2>
      <p>{texts.techsParagraph}</p>

      <div className="tecnologias-container">
        <div className="aptitudes">
          <div className="tech-list">
            <div
              className="percent"
              style={{ "--clr": "#E34C26", "--num": 90 }}
            >
              <div className="dot"></div>
              <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70"></circle>
              </svg>
              <div className="number">
                <h2>
                  90<span>%</span>
                </h2>
                <p>HTML</p>
                <img src={HTML} alt="HTML" />
              </div>
            </div>
          </div>
          <div className="tech-list">
            <div
              className="percent"
              style={{ "--clr": "#2965f1", "--num": 80 }}
            >
              <div className="dot"></div>
              <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70"></circle>
              </svg>
              <div className="number">
                <h2>
                  80<span>%</span>
                </h2>
                <p>CSS</p>
                <img src={CSS} alt="CSS" />
              </div>
            </div>
          </div>
          <div className="tech-list">
            <div
              className="percent"
              style={{ "--clr": "#f0db4f", "--num": 75 }}
            >
              <div className="dot"></div>
              <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70"></circle>
              </svg>
              <div className="number">
                <h2>
                  75<span>%</span>
                </h2>
                <p>JavaScript</p>
                <img src={JavaScript} alt="JavaScript" />
              </div>
            </div>
          </div>
          <div className="tech-list">
            <div
              className="percent"
              style={{ "--clr": "#61DBFB", "--num": 60 }}
            >
              <div className="dot"></div>
              <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70"></circle>
              </svg>
              <div className="number">
                <h2>
                  60<span>%</span>
                </h2>
                <p>React</p>
                <img src={React} alt="React" />
              </div>
            </div>
          </div>
          <div className="tech-list">
            <div
              className="percent"
              style={{ "--clr": "#fc6704", "--num": 80 }}
            >
              <div className="dot"></div>
              <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70"></circle>
              </svg>
              <div className="number">
                <h2>
                  80<span>%</span>
                </h2>
                <p>Git</p>
                <img src={GIT} alt="Git" />
              </div>
            </div>
          </div>
          <div className="tech-list">
            <div
              className="percent"
              style={{ "--clr": "#8c0099", "--num": 70 }}
            >
              <div className="dot"></div>
              <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70"></circle>
              </svg>
              <div className="number">
                <h2>
                  70<span>%</span>
                </h2>
                <p>Redux</p>
                <img src={Redux} alt="Redux" />
              </div>
            </div>
          </div>
          <div className="tech-list">
            <div
              className="percent"
              style={{ "--clr": "#0074e0", "--num": 75 }}
            >
              <div className="dot"></div>
              <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70"></circle>
              </svg>
              <div className="number">
                <h2>
                  75<span>%</span>
                </h2>
                <p>TypeScript</p>
                <img src={TypeScript} alt="TypeScript" />
              </div>
            </div>
          </div>
          <div className="tech-list">
            <div
              className="percent"
              style={{ "--clr": "#ff00bf", "--num": 80 }}
            >
              <div className="dot"></div>
              <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70"></circle>
              </svg>
              <div className="number">
                <h2>
                  80<span>%</span>
                </h2>
                <p>Sass/Less</p>
                <img src={Sass} alt="Sass" />
              </div>
            </div>
          </div>
          <div className="tech-list">
            <div
              className="percent"
              style={{ "--clr": "#8c00a8", "--num": 80 }}
            >
              <div className="dot"></div>
              <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70"></circle>
              </svg>
              <div className="number">
                <h2>
                  80<span>%</span>
                </h2>
                <p>BootStrap</p>
                <img src={Bootstrap} alt="Bootstrap" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Techs;
