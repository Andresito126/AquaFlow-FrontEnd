// features/water-quality/presentation/containers/BoxWaterQualityTrendChart.tsx

import { waterQualityTrendMock } from "../../../data/mock/waterQualityTrendMock";
import { WaterQualityTrendChart } from "../../components/waterQualityTrendChart";

export const BoxWaterQualityTrendChart = () => {
  return (
    <div className="p-6 dark:bg-[#011521] rounded-[20px] w-full border border-[#CBD5E1] dark:border-[#105B85]">
      <h2 className="text-2xl font-semibold mb-4">
        Tendencia de Calidad del Agua
      </h2>
      <div className="grid grid-cols-1 gap-4">
        <WaterQualityTrendChart
          title="Calidad del Agua (últimos 10 días)"
          data={waterQualityTrendMock}
        />
      </div>
    </div>
  );
};
