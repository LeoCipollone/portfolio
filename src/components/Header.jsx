import "../App.css";
import { useContext } from "react";
import LanguageContext from "../context/LanguageContext";

const Header = () => {
  const { texts, handleLanguage } = useContext(LanguageContext);

  return (
    <header>
      <div className="header-div">
        <h3 className="terminal">[admin@leo-laptop ~] $</h3>
        <h3 className="typing">cd Portfolio/Leonardo-Cipollone</h3>
      </div>
      <select className="language" name="language" onChange={handleLanguage}>
        <option value="es">{texts.language01}</option>
        <option value="en">{texts.language02}</option>
      </select>
    </header>
  );
};

export default Header;
