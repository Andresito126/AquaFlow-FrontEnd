import Header from "../../../shared/components/generic/header";
import IconReuse from "../../../../core/assets/icons/header/icon-stadistics-header.svg";
import { BoxSensorLineChart } from "../layouts/statistics/box-sensor-linechart";
import { useDateTime } from "../../../shared/hooks/useDataTime";
import { BoxSensorBarChart } from "../layouts/statistics/box-sensor-barchart";
import ThemeToggleButton from "../../../shared/components/generic/ThemeToggleButton";
import { useTheme } from "../../../shared/hooks/useTheme";
import { BoxSensorsInfoCards } from "../layouts/statistics/box-sensor-info-cards";
import { BoxWaterQualityTrendChart } from "../layouts/statistics/box-sensor-quality-trendchart";

export const StadisticsPage = () => {
    const activeFilterId = localStorage.getItem("activeFilterId");

  const { date, time } = useDateTime();
  const { theme, toggleTheme } = useTheme();

    if (!activeFilterId) {
    return (
      <div className="flex flex-col items-center justify-center h-[70vh] text-center px-4">
        <h2 className="text-xl font-semibold mb-2">No has seleccionado un filtro</h2>
        <p className="">
          Por favor selecciona un filtro activo para poder visualizar las estadísticas de tus mediciones, en la pagina de inicio (DASHBOARD)
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col items-stretch gap-4 ">
        <Header
          title="Estadísticas de tu filtrador"
          subtitle="Visualiza y descarga el historial de tus mediciones"
          subtitle2="IOT + Software para el cuidado del agua"
          icon2={IconReuse}
          date={date}
          time={time}
        />

        <BoxSensorLineChart />

        <BoxSensorBarChart />

        
       <BoxWaterQualityTrendChart/>

        <BoxSensorsInfoCards/>

        
        
      </div>
      <div>
        <ThemeToggleButton theme={theme} toggleTheme={toggleTheme} />
      </div>
    </>
  );
};
