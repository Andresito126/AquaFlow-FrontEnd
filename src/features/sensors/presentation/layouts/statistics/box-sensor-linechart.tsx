import { SensorLineChart } from "../../components/sensorLineChart";
import { useRealTimeSensorsData } from "../../hooks/useRealTimeSensorData";
import { useTranslation } from "react-i18next";

export const BoxSensorLineChart = () => {
  const userId = localStorage.getItem("userId") ?? ""; 
  // const data = useSensorReadingsSocket(userId);

  // const userId = "50ba2d27-d700-45d9-b209-e8ae76d9e77e"; 
  const { ph, tds, temperature, turbidity } = useRealTimeSensorsData(userId);

    const { t } = useTranslation("common");


  return (
    <div className="p-6 dark:bg-[#011521] rounded-[20px] w-full border-[#CBD5E1] dark:border-[#105B85] border-[1px]">
      <h2 className=" text-[28px] font-semibold mb-4">
        {t("common.pages.statistics.chartsTitle")}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <SensorLineChart
          title={t("common.pages.statistics.temperature")}
          data={temperature}
          strokeColor="#FF5722"
          unit="°C"
        />
        <SensorLineChart
          title={t("common.pages.statistics.ph")}
          data={ph}
          strokeColor="#2196F3"
          unit="pH"
        />
        <SensorLineChart
          title={t("common.pages.statistics.tds")}
          data={tds}
          strokeColor="#4CAF50"
          unit="ppm"
        />
        <SensorLineChart
          title={t("common.pages.statistics.turbidity")}
          data={turbidity}
          strokeColor="#9C27B0"
          unit="NTU"
        />
      </div>
    </div>
  );
};
