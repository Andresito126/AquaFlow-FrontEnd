import StatsRealTime from "../../components/dashboard/stadistic-real-time";
import IconTemperature from "../../../../../core/assets/icons/sensors/icon-temperature-dashboard.svg";
import BarTemperature from "../../../../../core/assets/icons/sensors/bar-counter-temperature.svg";
import IconPH from "../../../../../core/assets/icons/sensors/icon-ph-dash.svg";
import BarPH from "../../../../../core/assets/icons/sensors/bar-counter-ph.svg";
import IconTurbidity from "../../../../../core/assets/icons/sensors/icon-turbuidez-dash.svg";
import BarTurbuidez from "../../../../../core/assets/icons/sensors/bar-counter-turbuidez.svg";
import IconTDS from "../../../../../core/assets/icons/sensors/icon-tds-dash.svg";
import BarTDS from "../../../../../core/assets/icons/sensors/bar-counter-tds.svg";
import { useSensorReadingsSocket } from "../../hooks/useSensorReadingsSocket";

export const CardDashboardRealTime = () => {
  const userId = "50ba2d27-d700-45d9-b209-e8ae76d9e77e"; // aca es del fornt y debe ser el mismo que el del socket rooms
  const data = useSensorReadingsSocket(userId);

  console.log(" valores actuales del socket:", data);

  return (
    <div className="shadow-lg p-4 h-fit dark:bg-[#011521] border-[#CBD5E1] dark:border-[#105B85] border-[1px]  rounded-[20px]">
      <div className="mb-4">
        <h2 className="text-[25px] font-semibold">
          Monitoreo sobre la calidad del agua
        </h2>
      </div>
      <div className="flex flex-wrap items-center justify-between ml-[5%] mr-[5%]">
        <StatsRealTime
          icon={IconTemperature}
          data={`${data?.temperature?.value ?? "--"} °C`}
          graph={BarTemperature}
          title="Temperatura"
          alt="Ícono de temperatura"
        />
        <StatsRealTime
          icon={IconPH}
          data={`${data?.ph?.value ?? "--"}`}
          graph={BarPH}
          title="pH"
          alt="Ícono de pH"
        />
        <StatsRealTime
          icon={IconTurbidity}
          data={`${data?.turbidity?.value ?? "--"} ppm`}
          graph={BarTurbuidez}
          title="Turbidez"
          alt="Ícono de turbidez"
        />
        <StatsRealTime
          icon={IconTDS}
          data={`${data?.tds?.value ?? "--"} ppm`}
          graph={BarTDS}
          title="TDS"
          alt="Ícono de TDS"
        />
      </div>
    </div>
  );
};
