import React from "react";
import { useTranslation } from "react-i18next";
import { useAppContext } from "../context/AppContext";

const LanguageSelector: React.FC = () => {
    const {setLanguage, language}= useAppContext();
    const {t, i18n} = useTranslation();
    const defaultStyles = "px-1";
  return (
    <div className="text-sm flex content-center align-center border-2 border-white rounded-[4px]">
      <button onClick={() => { i18n.changeLanguage("en"); setLanguage("en"); }} className={`${defaultStyles} ${language == 'en' ? "font-bold bg-white text-primary" : ''}`}>EN</button>
      <button onClick={() => { i18n.changeLanguage("de"); setLanguage("de"); }} className={`${defaultStyles} ${language == 'de' ? "font-bold bg-white text-primary" : ''}`}>DE</button>
    </div>
  );
};

export default LanguageSelector;
