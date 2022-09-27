import { useContext } from "react";
import "../App.css";
import LanguageContext from "../context/LanguageContext";
import Resume from "../assets/images/resume.png"

const About = () => {
  const { texts } = useContext(LanguageContext);

  return (
    <>
      <h2 className="section-title">{texts.aboutTitle}</h2>
      <p className="about-p">{texts.aboutParagraphOne}</p>
      <p className="about-p">{texts.aboutParagraphTwo}</p>
          <img className="resume-img" src={Resume} alt="" />
      <div className="resume">
        <p>
          <a
            href="./assets/documents/Leonardo Cipollone - CV - Desarrollador Front End.pdf"
            target="_blank"
          >
            {texts.resumeSpanishButton}
          </a>
        </p>
        <p>
          <a
            href="./assets/documents/Leonardo Cipollone - CV - Front End Developer.pdf"
            target="_blank"
          >
            {texts.resumeEnglishButton}
          </a>
        </p>
      </div>
    </>
  );
};

export default About;
