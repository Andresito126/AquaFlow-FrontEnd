import { temperatureMock } from "../../../data/mock/temperatureMock";
import { SensorLineChart } from "../../components/sensorLineChart";

export const BoxSensorLineChart = () => {
  return (
    <>
      <div>
        <p>Gráficas de cada sensor</p>
      
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            
          <SensorLineChart
            title="Temperatura (°C)"
            data={temperatureMock}
            strokeColor="#FF5722"
            unit="°C"
          />
          <SensorLineChart
            title="Temperatura (°C)"
            data={temperatureMock}
            strokeColor="#FF5722"
            unit="°C"
          />
        </div>
        </div>
      
    </>
  );
};
