import { useContext } from "react";
import "../App.css";
import LanguageContext from "../context/LanguageContext";

const About = () => {
  const { texts } = useContext(LanguageContext);

  return (
    <>
      <h2 className="section-title">{texts.aboutTitle}</h2>
      <p>{texts.aboutParagraphOne}</p>
      <p>{texts.aboutParagraphTwo}</p>
      <h3 className="resume">{texts.resume}</h3>
      <div className="resume">
        <p>
          <a
            href="./documents/Leonardo Cipollone - CV - Frontend Developer.pdf"
            target="_blank"
          >
            {texts.resumeSpanishButton}
          </a>
        </p>
        <p>
          <a
            href="./documents/Leonardo Cipollone - CV - Frontend Developer (English).pdf"
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
