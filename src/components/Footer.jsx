import "../App.css";
import { useContext } from "react";
import LanguageContext from "../context/LanguageContext";

const Footer = () => {
  const { texts } = useContext(LanguageContext);

  return (
    <footer className="footer">
      <h2 className="section-title">{texts.footerTitle}</h2>
      <ul className="social-icon">
        <li>
          <a href="https://www.linkedin.com/in/leocipollone/" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/leocipollone_" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href="mailto:leocipollonedev@gmail.com">
            <i className="fa-solid fa-envelope"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/LeoCipollone" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-github-square"></i>
          </a>
        </li>
      </ul>
      <p className="copyright">{texts.copyright} © 2022</p>
    </footer>
  );
};

export default Footer;
