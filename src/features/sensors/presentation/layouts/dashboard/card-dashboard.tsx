import StatsRealTime from "../../components/dashboard/stadistic-real-time";
import IconTemperature from "../../../../../core/assets/icons/sensors/icon-temperature-dashboard.svg";
import IconPH from "../../../../../core/assets/icons/sensors/icon-ph-dash.svg";
import IconTurbidity from "../../../../../core/assets/icons/sensors/icon-turbuidez-dash.svg";
import IconTDS from "../../../../../core/assets/icons/sensors/icon-tds-dash.svg";
import { useSensorReadingsSocket } from "../../hooks/useSensorReadingsSocket";
import BarVisualizer from "../../../../shared/components/dashboard/BarVisualizer";
import { useTranslation } from "react-i18next";

export const CardDashboardRealTime = () => {
  const userId = localStorage.getItem("userId") ?? "";
  const data = useSensorReadingsSocket(userId);

  const { t } = useTranslation("common");

  return (
    <div className="shadow-lg p-4 h-fit dark:bg-[#011521] border-[#CBD5E1] dark:border-[#105B85] border-[1px] rounded-[20px]">
      <div className="mb-4">
        <h2 className="text-xl sm:text-2xl lg:text-[25px] font-semibold">
          {t("common.pages.dashboard.realTimeCard.title")}
        </h2>
      </div>
      <div className="flex flex-wrap items-center justify-between ml-[5%] mr-[5%]">

        <StatsRealTime
          icon={IconTemperature}
          data={`${data?.temperature?.value ?? "--"} °C`}
          title={t("common.pages.dashboard.realTimeCard.temperature")}
          alt={t("common.pages.dashboard.realTimeCard.altTemperature")}
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
  data={`${data?.ph?.value !== undefined ? data.ph.value.toFixed(2) : "--"} Ph`}
          title={t("common.pages.dashboard.realTimeCard.ph")}
          alt={t("common.pages.dashboard.realTimeCard.altPH")}
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
  data={`${data?.turbidity?.value !== undefined ? data.turbidity.value.toFixed(2) : ""} Ntu`}
          title={t("common.pages.dashboard.realTimeCard.turbidity")}
          alt={t("common.pages.dashboard.realTimeCard.altTurbidity")}
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
  data={`${data?.tds?.value !== undefined ? data.tds.value.toFixed(2) : "--"} Ppm`}
          title={t("common.pages.dashboard.realTimeCard.tds")}
          alt={t("common.pages.dashboard.realTimeCard.altTDS")}
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
