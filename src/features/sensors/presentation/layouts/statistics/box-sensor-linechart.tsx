
import { SensorLineChart } from "../../components/sensorLineChart";
import { useSensorData } from "../../hooks/useSensorChartData";


export const BoxSensorLineChart = () => {
  const tempData = useSensorData("temperature");
  const phData = useSensorData("ph");
  const tdsData = useSensorData("tds");
  const turbidezData = useSensorData("turbidez");

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
          data={phData}
          strokeColor="#2196F3"
          unit="pH"
        />
        <SensorLineChart
          title="TDS (ppm)"
          data={tdsData}
          strokeColor="#4CAF50"
          unit="ppm"
        />
        <SensorLineChart
          title="Turbidez (NTU)"
          data={turbidezData}
          strokeColor="#9C27B0"
          unit="NTU"
        />
      </div>
    </div>
  );
};
