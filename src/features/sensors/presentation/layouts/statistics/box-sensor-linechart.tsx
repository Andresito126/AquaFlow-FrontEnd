import { temperatureMock } from "../../../data/mock/temperatureMock";
import { SensorLineChart } from "../../components/sensorLineChart";
import { useSensorData } from "../../hooks/useSensorChartData";


export const BoxSensorLineChart = () => {
const selectedDate = "2025-07-11";
const today = new Date().toISOString().split("T")[0]; // Ej: 2025-07-11

const tempData = useSensorData("Temperatura", today);
const phData = useSensorData("pH", selectedDate);
const tdsData = useSensorData("TDS", selectedDate);
const turbidezData = useSensorData("Turbidez", selectedDate);

  return (
    <div className="p-6 bg-[#011521] rounded-[20px] w-full border-[#105B85] border-[1px]">

      <h2 className="text-white text-[28px] font-semibold mb-4">
        Gráficas de cada sensor
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <SensorLineChart
          title="Temperatura (°C)"
          data={tempData}
          strokeColor="#FF5722"
          unit="°C"
        />
        <SensorLineChart
          title="pH"
          data={temperatureMock}
          strokeColor="#2196F3"
          unit="pH"
        />
        <SensorLineChart
          title="TDS (ppm)"
          data={temperatureMock}
          strokeColor="#4CAF50"
          unit="ppm"
        />
        <SensorLineChart
          title="Turbidez (NTU)"
          data={temperatureMock}
          strokeColor="#9C27B0"
          unit="NTU"
        />
      </div>
    </div>
  );
};
