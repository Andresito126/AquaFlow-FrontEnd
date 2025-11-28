import React from "react";

interface Props {
  language: "es" | "en";
  toggleLanguage: () => void;
}

export const LanguageToggleButton: React.FC<Props> = ({language, toggleLanguage,}) => {
  return (
    <>
      <div
        className="w-[53px] fixed bottom-24 right-6 bg-[#011521] dark:bg-[#CBD5E1] border border-[#CBD5E1] dark:border-[#105B85] rounded-full p-3 shadow-lg cursor-pointer transition duration-300 hover:bg-[#105B85] dark:hover:bg-[#022f43] active:scale-95"
        title="Cambiar tema"
        onClick={toggleLanguage}
       >
        <button className ="text-xl focus:outline-none select-none " >
          <p className="text-white dark:text-[#011521]" >{language === "es" ? "EN" : "ES"}</p>
            
        </button>
      </div>
    </>
  );
};
