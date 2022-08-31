import "../App.css";
import { useContext } from "react";
import LanguageContext from "../context/LanguageContext";

const Footer = () => {
  const { texts } = useContext(LanguageContext);

  return (
    <footer class="footer">
      <h2 class="section-title">{texts.footerTitle}</h2>
      <ul class="social-icon">
        <li>
          <a href="https://www.linkedin.com/in/leocipollone/" target="_blank" rel="noreferrer">
            <i class="fa-brands fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/leocipollone_" target="_blank" rel="noreferrer">
            <i class="fa-brands fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href="mailto:leocipollonedev@gmail.com">
            <i class="fa-solid fa-envelope"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/LeoCipollone" target="_blank" rel="noreferrer">
            <i class="fa-brands fa-github-square"></i>
          </a>
        </li>
      </ul>
      <p class="copyright">{texts.copyright} © 2022</p>
    </footer>
  );
};

export default Footer;
