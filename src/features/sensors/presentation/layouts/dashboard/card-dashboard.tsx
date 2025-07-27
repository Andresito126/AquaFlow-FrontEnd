import StatsRealTime from "../../components/dashboard/stadistic-real-time";
import IconTemperature from "../../../../../core/assets/icons/sensors/icon-temperature-dashboard.svg";
import IconPH from "../../../../../core/assets/icons/sensors/icon-ph-dash.svg";
import IconTurbidity from "../../../../../core/assets/icons/sensors/icon-turbuidez-dash.svg";
import IconTDS from "../../../../../core/assets/icons/sensors/icon-tds-dash.svg";
import { useSensorReadingsSocket } from "../../hooks/useSensorReadingsSocket";
import BarVisualizer from "../../../../shared/components/dashboard/BarVisualizer";

export const CardDashboardRealTime = () => {
  const userId = localStorage.getItem("userId") ?? "";
  const data = useSensorReadingsSocket(userId);
  console.log(" valores actuales del socket:", data);
  console.log("user del socket:", userId);

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
          title="Temperatura"
          alt="Ícono de temperatura"
          graph={
            <BarVisualizer
              value={data?.temperature?.value ?? 0}
              max={50}
              color="#E69732"
            />
          }
        />

        <StatsRealTime
          icon={IconPH}
          data={`${data?.ph?.value ?? "--"}`}
          title="pH"
          alt="Ícono de pH"
          graph={
            <BarVisualizer
              value={data?.ph?.value ?? 0}
              max={14}
              color="#308451"
            />
          }
        />

        <StatsRealTime
          icon={IconTurbidity}
          data={`${data?.turbidity?.value ?? "--"} NTU`}
          title="Turbidez"
          alt="Ícono de turbidez"
          graph={
            <BarVisualizer
              value={data?.turbidity?.value ?? 0}
              max={100} 
              color="#DDB723" 
            />
          }
        />
        <StatsRealTime
          icon={IconTDS}
          data={`${data?.tds?.value ?? "--"} ppm`}
          title="TDS"
          alt="Ícono de TDS"
          graph={
            <BarVisualizer
              value={data?.tds?.value ?? 0}
              max={1000}
              color="#2BC2E0" 
            />
          }
        />
      </div>
    </div>
  );
};
