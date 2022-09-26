import "../App.css";
import { useContext } from "react";
import ReactSelect from 'react-select'
import LanguageContext from "../context/LanguageContext";
import Spanish from "../assets/idiomas/spanish.png";
import English from "../assets/idiomas/english.png";

const Header = () => {
  const { texts, handleLanguage } = useContext(LanguageContext);
  const countries = [
    { value: "es", image: `${Spanish}` },
    { value: 'en', image: `${English}` }
  ];
  return (
    <header>
      <div className="header-div">
        <h3 className="terminal">admin@leo-laptop:~$</h3>
        <h3 className="typing">cd Portfolio/Leonardo-Cipollone</h3>
      </div>
      
     <ReactSelect
       value={countries.value}
       className="country-select"
       name="language"
       placeholder={texts.selectLanguage}
       options={countries}
       onChange={(val)=> {handleLanguage({target: { name:'revision_id', value: val.value }})}}
       formatOptionLabel={country => (
         <div className="country-option">
           <img src={country.image} alt="language" />
         </div>
       )}
     />  
    </header>
  );
};

export default Header;
