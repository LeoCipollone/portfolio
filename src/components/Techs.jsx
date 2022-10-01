import "../App.css";
import { useContext } from "react";
import LanguageContext from "../context/LanguageContext";



const Techs = () => {
  const { texts } = useContext(LanguageContext);

  return (
    <>
    <h2 className="section-title">{texts.techsTitle}</h2>
      <div className="techs-logo">
        <ul>
          <li>
            <span />
            <span />
            <span />
            <span />
            <span />
          </li>
          <li>
            <span />
            <span />
            <span />
            <span />
            <span />
          </li>
          <li>
            <span />
            <span />
            <span />
            <span />
            <span />
          </li>
          <li>
            <span />
            <span />
            <span />
            <span />
            <span />
          </li>
          <li>
            <span />
            <span />
            <span />
            <span />
            <span />
          </li>
          <li>
            <span />
            <span />
            <span />
            <span />
            <span />
          </li>
          <li>
            <span />
            <span />
            <span />
            <span />
            <span />
          </li>
          <li>
            <span />
            <span />
            <span />
            <span />
            <span />
          </li>
          <li>
            <span />
            <span />
            <span />
            <span />
            <span />
          </li>
          <li>
            <span />
            <span />
            <span />
            <span />
            <span />
          </li>
          <li>
            <span />
            <span />
            <span />
            <span />
            <span />
          </li>
          <li>
            <span />
            <span />
            <span />
            <span />
            <span />
          </li>
          <li>
            <span />
            <span />
            <span />
            <span />
            <span />
          </li>
          <li>
            <span />
            <span />
            <span />
            <span />
            <span />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Techs;
