import ThemeToggleButton from "../components/generic/ThemeToggleButton";
import { useTheme } from "../hooks/useTheme";
import { LanguageToggleButton } from "../components/generic/LanguageToggleButton";
import { useLanguage } from "../hooks/useLanguage";
import { useTranslation } from "react-i18next";

export const NotFoundPage = () => {

    const {theme, toggleTheme} = useTheme();
    const { language, toggleLanguage } = useLanguage();
    const { t } = useTranslation("common");

    return (
        <>
      
    <div className="text-center mt-16">
        <p className="text-7xl font-semibold">{t("common.pages.notFound.code")}</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance sm:text-7xl">{t("common.pages.notFound.title")}</h1>
        <p className="mt-6 text-lg font-medium sm:text-xl/8">{t("common.pages.notFound.description")}</p>
    <div className="mt-10 flex items-center justify-center gap-x-6">
      <a href="\dashboard" className="shadow-lg dark:bg-[#011521] border-1 rounded-[20px] dark:border-[#105B85] hover:bg-[#3F8DB4]  border-[#CBD5E1] px-3.5 py-2.5 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 ">{t("common.pages.notFound.goBackButton")}</a>
    </div>
    <div>
        <LanguageToggleButton language={language} toggleLanguage={toggleLanguage} />
    </div>
    <div>
        <ThemeToggleButton theme={theme} toggleTheme={toggleTheme} />
    </div>
  </div>

        </>
    );
};