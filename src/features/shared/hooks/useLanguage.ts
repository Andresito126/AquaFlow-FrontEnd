import { useEffect, useState } from "react";
import i18n from "../../../core/i18n/i18n";

export const useLanguage = () => {
  const [language, setLanguage] = useState<"es" | "en">(() => {
    const stored = localStorage.getItem("language") as "es" | "en" | null;
    return stored ?? "es";
  });

  useEffect(() => {
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
  }, [language]);

  const toggleLanguage = () =>
    setLanguage((prev) => (prev === "es" ? "en" : "es"));

  return { language, toggleLanguage };
};
