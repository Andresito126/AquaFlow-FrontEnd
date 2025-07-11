import Header from "../../../shared/components/generic/header";
import IconReuse from "../../../../core/assets/icons/header/icon-stadistics-header.svg";
import { BoxSensorLineChart } from "../layouts/dashboard/box-sensor-linechart";


export const StadisticsPage = () => {
  return (
    <>
      <div className="flex flex-col items-stretch gap-4">
        <Header
          title="Estadísticas de tu filtrador"
          subtitle="Visualiza y descarga el historial de tus mediciones"
          subtitle2="IOT + Software para el cuidado del agua"
          icon={IconReuse}
        />

        <BoxSensorLineChart />

      </div>
    </>
  );
};
