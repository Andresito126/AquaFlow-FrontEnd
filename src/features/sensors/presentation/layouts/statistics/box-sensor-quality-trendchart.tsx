import { WaterQualityTrendChart } from "../../components/waterQualityTrendChart";
import { useWaterQualityData } from "../../hooks/useWaterQualityData";

export const BoxWaterQualityTrendChart = () => {
  const { data, } = useWaterQualityData();
  return (
    <div className="p-6 dark:bg-[#011521] rounded-[20px] w-full border border-[#CBD5E1] dark:border-[#105B85]">
      <h2 className="text-2xl font-semibold mb-4">
        Calidad del Agua
      </h2>
      <div className="grid grid-cols-1 gap-4">
        <WaterQualityTrendChart
          title="Calidad del Agua (últimos 10 días)"
          data={data}
        />
      </div>
    </div>
  );
};
