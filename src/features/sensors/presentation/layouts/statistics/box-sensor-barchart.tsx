import { WaterQualityBarChart } from "../../components/waterQualityBarChart";
import { useWaterQualityData } from "../../hooks/useWaterQualityData";
import { useTranslation } from "react-i18next";

export const BoxSensorBarChart = () => {
  const { t } = useTranslation("common");
  const { data } = useWaterQualityData();

  return (
    <div className="p-6 dark:bg-[#011521] rounded-[20px] w-full border-[#CBD5E1] dark:border-[#105B85] border-[1px]">
      <h2 className="text-2xl font-semibold mb-4">
        {t("common.pages.statistics.barChart.sectionTitle")}
      </h2>

      <div className="grid grid-cols-1 gap-4">
        <WaterQualityBarChart
          title={t("common.pages.statistics.barChart.chartTitle")}
          data={data}
        />
      </div>
    </div>
  );
};
