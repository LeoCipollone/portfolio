import "../App.css";
import { useContext } from "react";
import LanguageContext from "../context/LanguageContext";

const Header = () => {
  const { handleLanguage } = useContext(LanguageContext);

  return (
    <header>
      <div className="header-div">
        <h3 className="terminal">[admin@leo-laptop ~] $</h3>
        <h3 className="typing">cd Portfolio/Leonardo-Cipollone</h3>
      </div>
      <select className="language" name="language" onChange={handleLanguage}>
        <option value="es">ES</option>
        <option value="en">EN</option>
      </select>
    </header>
  );
};

export default Header;
