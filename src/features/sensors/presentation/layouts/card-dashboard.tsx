import StatsRealTime from "../components/dashboard/stadistic-real-time";
import IconTemperature from "../../../../core/assets/icons/sensors/icon-temperature-dashboard.svg";
import BarTemperature from "../../../../core/assets/icons/sensors/bar-counter-temperature.svg";
import IconPH from "../../../../core/assets/icons/sensors/icon-ph-dash.svg";
import BarPH from "../../../../core/assets/icons/sensors/bar-counter-ph.svg";
import IconTurbidity from "../../../../core/assets/icons/sensors/icon-turbuidez-dash.svg";
import BarTurbuidez from "../../../../core/assets/icons/sensors/bar-counter-turbuidez.svg";
import IconTDS from "../../../../core/assets/icons/sensors/icon-tds-dash.svg";
import BarTDS from "../../../../core/assets/icons/sensors/bar-counter-tds.svg";
import { useSensorReadingsSocket } from "../hooks/useSensorReadingsSocket";

export const CardDashboardRealTime = () => {
  const userId = "123"; // ⚠️ Asegúrate que este ID sea el mismo que emite el backend
  const data = useSensorReadingsSocket(userId);

  return (
    <div className="shadow-lg p-6 bg-[#011521] rounded-[20px]">
      <div className="mb-4">
        <h2 className="text-[25px] font-semibold">
          Monitoreo sobre la calidad del agua
        </h2>
      </div>
      <div className="flex flex-wrap items-center justify-between ml-[10%] mr-[10%]">
        <StatsRealTime
          icon={IconTemperature}
          data={`${data?.temperature?.values ?? "--"} °C`}
          graph={BarTemperature}
          title="Temperature"
          alt="Ícono de temperatura"
        />
        <StatsRealTime
          icon={IconPH}
          data={`${data?.ph?.values ?? "--"}`}
          graph={BarPH}
          title="Ph"
          alt="Ícono de pH"
        />
        <StatsRealTime
          icon={IconTurbidity}
          data={`${data?.turbidity?.values ?? "--"} ppm`}
          graph={BarTurbuidez}
          title="Turbidez"
          alt="Ícono de turbidez"
        />
        <StatsRealTime
          icon={IconTDS}
          data={`${data?.tds?.values ?? "--"} ppm`}
          graph={BarTDS}
          title="TDS"
          alt="Ícono de TDS"
        />
      </div>
    </div>
  );
};
