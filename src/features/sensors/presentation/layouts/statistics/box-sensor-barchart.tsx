import { waterQualityMock } from "../../../data/mock/waterQualityMock";
import { WaterQualityBarChart } from "../../components/waterQualityBarChart";

export const BoxSensorBarChart = () => {
  return (
    <div className="p-6 bg-[#011521] rounded-[20px] w-full border border-[#105B85]">
      <h2 className="text-white text-2xl font-semibold mb-4">
        Calidad del Agua
      </h2>
      <div className="grid grid-cols-1 gap-4">
        <WaterQualityBarChart title="Calidad del Agua (%)" data={waterQualityMock} />
      </div>
    </div>
  );
};
