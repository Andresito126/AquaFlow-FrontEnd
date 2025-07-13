import Header from "../../../shared/components/generic/header";
import IconReuse from "../../../../core/assets/icons/header/icon-stadistics-header.svg";
import { BoxSensorLineChart } from "../layouts/statistics/box-sensor-linechart";
import { useDateTime } from "../../../shared/hooks/useDataTime";
import { BoxSensorBarChart } from "../layouts/statistics/box-sensor-barchart";

export const StadisticsPage = () => {
  const { date, time } = useDateTime();

  return (
    <>
      <div className="flex flex-col items-stretch gap-4 ">
        <Header
          title="Estadísticas de tu filtrador"
          subtitle="Visualiza y descarga el historial de tus mediciones"
          subtitle2="IOT + Software para el cuidado del agua"
          icon1={IconReuse}
          date={date}
          time={time}
        />

        <BoxSensorLineChart />

        <BoxSensorBarChart />
        
      </div>
    </>
  );
};
