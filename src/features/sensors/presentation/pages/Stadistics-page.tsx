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

// import { BoxSensorsInfoCards } from "../layouts/statistics/box-sensor-info-cards";

export const StadisticsPage = () => {
  // const activeFilterId = localStorage.getItem("activeFilterId");

  const { date, time } = useDateTime();
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const { t } = useTranslation("common");

  // if (!activeFilterId) {
  //   return (
  //     <div className="flex flex-col items-center justify-center h-[70vh] text-center px-4">
  //       <h2 className="text-[25px] font-semibold mb-2">
  //         No has seleccionado un filtro
  //       </h2>
  //       <p className="text-[18px]">
  //         Por favor selecciona un filtro activo para poder visualizar las
  //         estadísticas de tus mediciones. Selecciónalo  en la pagina de inicio (DASHBOARD).
  //       </p>
  //     </div>
  //   );
  // }

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
