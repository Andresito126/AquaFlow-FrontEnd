import Header from "../../../shared/components/generic/header";
import IconReuse from "../../../../core/assets/icons/header/icon-stadistics-header.svg";
import { BoxSensorLineChart } from "../layouts/statistics/box-sensor-linechart";
import { useDateTime } from "../../../shared/hooks/useDataTime";
import { BoxSensorBarChart } from "../layouts/statistics/box-sensor-barchart";
import ThemeToggleButton from "../../../shared/components/generic/ThemeToggleButton";
import { useTheme } from "../../../shared/hooks/useTheme";
import { LanguageToggleButton } from "../../../shared/components/generic/LanguageToggleButton";
import { useLanguage } from "../../../shared/hooks/useLanguage";
import { useTranslation } from "react-i18next";
import { useSidebar } from "../../../shared/layouts/sideBar/SidebarContext"; 

// import { BoxSensorsInfoCards } from "../layouts/statistics/box-sensor-info-cards";

export const StadisticsPage = () => {
  const activeFilterId = localStorage.getItem("activeFilterId");

  const { date, time } = useDateTime();
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const { t } = useTranslation("common");
  const { toggleSidebar } = useSidebar();

if (!activeFilterId) {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] text-center px-4">
      <h2 className="text-[25px] font-semibold mb-2">
        {t("common.pages.statistics.noFilterTitle")}
      </h2>

      <p className="text-[18px]">
        {t("common.pages.statistics.noFilterMessage")}
      </p>
      <br /> <br />
      <a href="\dashboard" className="shadow-lg dark:bg-[#011521] border-1 rounded-[20px] dark:border-[#105B85] hover:bg-[#3F8DB4]  border-[#CBD5E1] px-3.5 py-2.5 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 ">{t("common.pages.notFound.goBackButton")}</a>
    </div>
  );  
}

  return (
    <>
      <div className="flex flex-col items-stretch gap-4 ">
        <Header
          title={t("common.pages.statistics.header.title")}
          subtitle={t("common.pages.statistics.header.subtitle")}
          subtitle2={t("common.pages.statistics.header.subtitle2")}
          icon2={IconReuse}
          date={date}
          time={time}
          onMenuToggle={toggleSidebar}
        />

        <BoxSensorLineChart />

        <BoxSensorBarChart />

        {/* <BoxWaterQualityTrendChart /> */}

        {/* <BoxSensorsInfoCards /> */}
      </div>
      <div>
        <LanguageToggleButton language={language} toggleLanguage={toggleLanguage} />
        <ThemeToggleButton theme={theme} toggleTheme={toggleTheme} />
      </div>
    </>
  );
};
