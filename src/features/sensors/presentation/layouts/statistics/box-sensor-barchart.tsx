import { waterQualityTrendMock } from "../../../data/mock/waterQualityTrendMock";
import { WaterQualityBarChart } from "../../components/waterQualityBarChart";

export const BoxSensorBarChart = () => {
  return (
    <div className="p-6 dark:bg-[#011521] rounded-[20px] w-full  border-[#CBD5E1] dark:border-[#105B85] border-[1px]">
      <h2 className=" text-2xl font-semibold mb-4"> 
        {/* text-white */}
        Tendencia de Calidad del Agua
      </h2>
      <div className="grid grid-cols-1 gap-4">
        <WaterQualityBarChart title="Calidad del Agua (últimos 10 días)" data={waterQualityTrendMock} />
      </div>
    </div>
  );
};
